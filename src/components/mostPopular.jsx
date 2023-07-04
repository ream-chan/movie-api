import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'


export  function Popular() {
  const [popular, setPopular] = useState ([
    {
      "release_date": "2023-05-17",
    "title": "Fast X",
     "poster_path":  
      "https://image.tmdb.org/t/p/w440_and_h660_face/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
      "id": 385687,
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
      "release_date": "2023-06-09",
      "title": "Extraction 2",
      "id": 697843,
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      "release_date": "2023-03-22",
      "title": "John Wick: Chapter 4",
      "id": 603692,
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      "release_date": "2023-05-31",
      "title": "Spider-Man: Across the Spider-Verse",
      "id": 569094,
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      "release_date": "2023-04-05",
      "title": "The Super Mario Bros. Movie",
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      "release_date": "2023-06-06",
      "title": "Transformers: Rise of the Beasts",
      "id": 667538,
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      "release_date": "2023-06-13",
      "title": "The Flash",
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      "release_date": "2023-05-03",
      "title": "Guardians of the Galaxy Vol. 3",
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      "release_date": "2022-12-14",
      "title": "Avatar: The Way of Water",
      "id": 34434,
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
      "release_date": "2023-05-18",
      "title": "The Little Mermaid",
      "id": 2474,
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
      "release_date": "2023-06-08",
      "title": "My Fault",
       "id": 2434,
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
  "release_date": "2023-06-14",
  "title": "Elemental",
  "id": 976573,
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
   
    return(
     <>
    
      <div className='container'>
        
        <h1 className='popular-title'>Most popular</h1>
         <div className="row g-5">
                 {
                    popular && popular.map(p => (
                      <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xxl-2'>
                      <Link to={`/popular/${p.id}`} className='text-decoration-none' >
                      <Card poster_path={p.poster_path} title={p.title} />
                      </Link>
                      </div>
                    ))
                 }
                 <button className='load'>Load more</button>
                 </div>
        </div> 
       
        
       
     
      
    </>
    )
}
