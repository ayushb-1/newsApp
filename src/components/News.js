import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles:[],
      loading:false

    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9837adbf8d1e4dacb083a3d361d7f92c";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles:parseData.articles})
  }

  render() {
    return (
      <div className='my-28 '>
        
        <div className='p-10  px-20 flex flex-col lg:grid grid-cols-3' >
         { this.state.articles.map((element)=>{

            return <div className="my-6" key={element.url}>
                     <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                   </div> 
          })}
          
          
          
        </div>
      </div>
    )
  }
}

export default News
