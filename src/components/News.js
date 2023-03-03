import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

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
   capitalizeFirstLetter=(string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } 

  constructor(props){
    super(props);
    this.state = {
      articles:[],
      loading:true,
      page:1,
      totalResults:0
    }
    document.title= `${this.capitalizeFirstLetter(this.props.category)} - NewsPanda`;
  }

  async updateNews(){

    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9837adbf8d1e4dacb083a3d361d7f92c&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({articles:parseData.articles, 
      totalResults:parseData.totalResults,
      loading:false
    })
    this.props.setProgress(100);
  }
  async componentDidMount(){
    this.updateNews();
  }
  
   fetchMoreData=async()=>{

    this.setState({page: this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9837adbf8d1e4dacb083a3d361d7f92c&page=${this.state.page}&pagesize=${this.props.pagesize}`;

    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles:this.state.articles.concat(parseData.articles), 
      totalResults:parseData.totalResults,
      
    })
  };

  render() {
    return (
      <div className='mt-32 '>
        <h2 className='text-4xl text-center'>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
         
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
         
        >
        
          <div className='p-10  px-20 flex flex-col lg:grid grid-cols-3' >
          {this.state.articles.map((element)=>{
            
            return <div className="my-4" key={element.url}>
                      <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/>
                    </div> 
            })}        
                  
          </div>
        </InfiniteScroll>
          
      </div>
    )
  }
}

export default News
