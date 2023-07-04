import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Recommed() {
   const [recommend, setRecommend] = useState ([
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/9YEGawvjaRgnyW6QVcUhFJPFDco.jpg",
        "release_date": "2023-06-16",
        "title": "Black Clover: Sword of the Wizard King",
      },
      {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      "release_date": "2022-12-07",
      "title": "Puss in Boots: The Last Wish",
    },
      {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
        "release_date": "2023-06-08",
        "title": "My Fault",
      },
      {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
    "release_date": "2023-06-14",
    "title": "Elemental",
      },
    {  
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
      "release_date": "2023-02-15",
      "title": "Ant-Man and the Wasp: Quantumania",
    },
    {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
      "release_date": "2023-03-01",
      "title": "Creed III",
    }
   ])
   const getApi = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
    .then(resp => resp.json())
    .then(resp => console.log(resp.results))
      }
      const getanotherApi = () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2")
        .then(resp => resp.json())
        .then(resp => console.log(resp.results))
          }
      useEffect(()=> {
       getApi()
       getanotherApi()
     },[]) 
    return (
        <>
    
        <div className='container'>
          
          <h1 className='recommended-title'>Recommended for you</h1>
           <div className="row g-5">
                   {
                     recommend && recommend.map(p => (
                        <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xxl-2'>
                        {/* <Link to="/popular" className='text-decoration-none' > */}
                        <Card poster_path={p.poster_path} title={p.title} />
                        
                        </div>
                      ))
                   }
                   </div>
          </div> 
         
       
        
      </>
  )
}
