import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Trending() {
    const [trending, setTrending] = useState ([
        {
          "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
          "release_date": "2023-06-08",
          "title": "My Fault",
        },
        {
          "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
      "release_date": "2023-06-14",
      "title": "Elemental",
        }
      ])
      const getApi = () => {
       fetch("https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
       .then(resp => resp.json())
       .then(resp => console.log(resp.results))
         }
         useEffect(()=> {
          getApi()
        },[]) 
        
    return (
        <>
        <div className="container">
         
        <h1>Trending</h1>
        <div className="row g-3">
      {
        trending && trending.map(props => (
          <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xxl-2'>
            <Card poster_path={props.poster_path} title={props.title} />
          </div>
        ))
      }
      </div>
      </div>
      </>
  )
  
}
