import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'


export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles:[],
      loading:false,
      page:1,



    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9837adbf8d1e4dacb083a3d361d7f92c&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles:parseData.articles, 
      totalResults:parseData.totalResults,
      loading:false
    })
  }
  
  handleprev  = async()=>{
    let url =  `https://newsapi.org/v2/top-headlines?country=in&apiKey=9837adbf8d1e4dacb083a3d361d7f92c&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles:parseData.articles, page:this.state.page-1, loading:false})
  }
  
  handlenext  = async()=>{
    if(Math.ceil(this.state.page > this.state.totalResults/this.props.pagesize)){
      
    }
    else{
      let url =  `https://newsapi.org/v2/top-headlines?country=in&apiKey=9837adbf8d1e4dacb083a3d361d7f92c&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({articles:parseData.articles, page:this.state.page+1, loading:false})

    }
  }

  render() {
    return (
      <div className='my-28 '>
        {this.state.loading && <Spinner/>}
        <div className='p-10  px-20 flex flex-col lg:grid grid-cols-3' >
         {!this.state.loading && this.state.articles.map((element)=>{

            return <div className="my-6" key={element.url}>
                     <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                   </div> 
          })}        
                 
        </div>
          <div className="flex justify-between mx-10">
          <button disabled={this.state.page<=1} type="button" onClick={this.handleprev} class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">&larr; prev</button>
          <button disabled ={this.state.page > this.state.totalResults/this.props.pagesize} type="button" onClick={this.handlenext} class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default News
