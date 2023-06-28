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
      "https://image.tmdb.org/t/p/w440_and_h660_face/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
      "release_date": "2023-06-09",
      "title": "Extraction 2",
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      "release_date": "2023-03-22",
      "title": "John Wick: Chapter 4",
    },
    {
      "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      "release_date": "2023-05-31",
      "title": "Spider-Man: Across the Spider-Verse",
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
        
        <h1>Most popular</h1>
         <div className="row g-3">
                 {
                    popular && popular.map(p => (
                      <div className='col-12 col-sm-6 col-md-6 col-lg-3 col-xxl-2'>
                      <Link to="/popular" className='text-decoration-none' >
                      <Card poster_path={p.poster_path} title={p.title} date={p.release_date}/>
                      </Link>
                      </div>
                    ))
                 }
                 </div>
        </div> 
       
     
      
    </>
    )
}
