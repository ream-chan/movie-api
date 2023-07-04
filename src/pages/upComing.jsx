import { useEffect, useState } from 'react'
import Recommed from '../components/Recommed'
import img6 from '../images/avengers-status.webp'
import Card from '../components/Card'


export function Upcoming() {
    const [upcoming, setUpcoming] = useState([
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
        "release_date": "2023-06-13",
        "title": "The Flash",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
      "release_date": "2023-05-11",
      "title": "Hypnotic",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/ygO9lowFMXWymATCrhoQXd6gCEh.jpg",
      "release_date": "2023-01-27",
      "title": "Sisu",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/2lEyzOq6ILNgBpLLpTRckQhbNNt.jpg",
        "release_date": "2022-10-22",
        "title": "Sword Art Online the Movie -Progressive- Scherzo of Deep Night",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/mFp3l4lZg1NSEsyxKrdi0rNK8r1.jpg",
      "release_date": "2023-04-06",
      "title": "To Catch a Killer",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
        "release_date": "2022-11-11",
        "title": "Suzume",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/cgYg04miVQUAG2FKk3amSnnHzOp.jpg",
      "release_date": "2023-07-19",
      "title": "Barbie",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/azTC5osYiqei1ofw6Z3GmUrxQbi.jpg",
        "release_date": "2023-06-16",
        "title": "Insidious: The Red Door",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/dteXMzVY53GBHUgrR7vigAartsP.jpg",
      "release_date": "2023-04-27",
      "title": "The Secret Kingdom",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Mission: Impossible - Dead Reckoning Part One",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/tiZF8b9T9fMcwvsEEkJ5ik1wCnV.jpg",
        "release_date": "2022-12-08",
        "title": "Bed Rest",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/aqZ75oN6yd7UTShYIMNlpSdDbbH.jpg",
        "release_date": "2023-07-19",
        "title": "Oppenheimer",
    },
    ])
    const getApi = () => {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
        .then(resp => resp.json())
        .then(resp => console.log(resp.results))
          }
          const getanotherApi = () => {
           fetch("")
           .then(resp => resp.json())
           .then(resp => console.log(resp.results))
             }
          useEffect(()=> {
           getApi()
           getanotherApi()
         },[])  
    return (
        <>
        <div className="trend">
            <img src={img6} alt="" />
        </div>
        <div className="container">
         
         <h1 className='title-trend'>Upcoming</h1>
         <div className="row g-3">
       {
         upcoming && upcoming.map(props => (
           <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xxl-2'>
             <Card poster_path={props.poster_path} title={props.title} />
             
           </div>
         ))
       }
       
       <button className='load'>Load more</button>
       
        <Recommed />
       </div>
       </div>
        </>
    )
}