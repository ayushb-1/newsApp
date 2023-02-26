import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps={
    country :'in',
    pageSize: 5,
    category: 'general'
  }
  
  static propTypes={
    country:PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  constructor(){
    super();
    this.state = {
      articles:[],
      loading:false,
      page:1,



    }
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9837adbf8d1e4dacb083a3d361d7f92c&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles:parseData.articles, 
      totalResults:parseData.totalResults,
      loading:false
    })
  }
  async componentDidMount(){
    this.updateNews();
  }
  
  handleprev  = async()=>{
  
    this.setState({ page:this.state.page-1})
    this.updateNews();
  }
  
  handlenext  = async()=>{
    if(!Math.ceil(this.state.page > this.state.totalResults/this.props.pagesize)){
      
      this.setState({ page:this.state.page+1});
      this.updateNews();

    }
  }

  render() {
    return (
      <div className='mt-32 '>
        <h2 className='text-4xl text-center  '>TOP HEADLINES</h2>

        {this.state.loading && <Spinner/>}
        <div className='p-10  px-20 flex flex-col lg:grid grid-cols-3' >
         {!this.state.loading && this.state.articles.map((element)=>{

            return <div className="my-4" key={element.url}>
                     <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/>
                   </div> 
          })}        
                 
        </div>
          <div className="flex justify-between mx-10">
          <button disabled={this.state.page<=1} type="button" onClick={this.handleprev} className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">&larr; prev</button>
          <button disabled ={this.state.page > this.state.totalResults/this.props.pagesize} type="button" onClick={this.handlenext} className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default News
