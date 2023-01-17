
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title, description, imageUrl,newsUrl} = this.props;    
    return (
        <div className="max-w-[22rem] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="/newsdetail">
                <img className="rounded-t-lg" src={!imageUrl?"https://assets2.rockpapershotgun.com/TF2-asset-leak.jpg/BROK/thumbnail/1200x630/TF2-asset-leak.jpg":imageUrl} alt="" />
            </a>
            <div className="p-5">
                <a href="/newsdetail">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <a href={newsUrl} target="_blank"className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>     
    )
  }
}

export default NewsItem
