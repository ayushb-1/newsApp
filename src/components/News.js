import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  articles=[
    {
      "source": { "id": "google-news-in", "name": "Google News (India)" },
      "author": "The Tribune India",
      "title": "CCTV captures the moment Rishabh Pant's speeding Mercedes crashes into a divider",
      "description": "Cricketer Rishabh Pant's Mercedes car--as it crashed into a divider-- was caught on a security camera.",
      "url": "https://www.tribuneindia.com/news/trending/cctv-captures-the-moment-rishabh-pants-speeding-mercedes-crashes-into-a-divider-465877",
      "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/12/2022_12$largeimg_1065488477.JPG",
      "publishedAt": "2022-12-30T15:41:00+00:00",
      "content": "The Tribune, now published from Chandigarh, started publication on February 2, 1881, in Lahore (now in Pakistan). It was started by Sardar Dyal Singh Majithia, a public-spirited philanthropist, and i… [+505 chars]"
    },
    {
      "source": {
        "id": "australian-financial-review",
        "name": "Australian Financial Review"
      },
      "author": "Aaron Weinman",
      "title": "From Chris Gayle to DJ Havana Brown: How a raft of stars landed on one of the country’s most controversial cricket matches",
      "description": "Some of West Indies and Sri Lanka’s biggest cricket celebrities played for a talent manager accused of stealing $250,000.",
      "url": "http://www.afr.com/companies/sport/the-mystery-of-four-test-captains-in-one-suburban-cricket-team-20221214-p5c6eg",
      "urlToImage": "https://static.ffx.io/images/$zoom_1.2245%2C$multiply_1%2C$ratio_1.777778%2C$width_1059%2C$x_333%2C$y_89/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/53f0a53167ffd2483a540ded51f8b01ce893d78a",
      "publishedAt": "2022-12-27T18:00:00Z",
      "content": "Nav De Silva, as he is known among friends, is described by teammates as soft-spoken behind the stumps, an unusual trait for wicketkeepers. One person says De Silva, 35, was so subdued on the field t… [+14147 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor(){
    super();
    this.state = {
      articles:this.articles,
      loading:false

    }
  }
  render() {
    return (
      <div className='my-28 '>
        
        <div className='p-10  px-20 grid grid-cols-3' >
         { this.state.articles.map((element)=>{

            return <div classNAme="my-6 key={element.url}">
                     <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} />
                   </div> 
          })}
          
          
          
        </div>
      </div>
    )
  }
}

export default News
