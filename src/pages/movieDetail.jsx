import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {
        const {id} = useParams ()
        const [banner, setBanner] = useState ([
           
            {
                "release_date": "2023-05-17",
                "title": "Fast X",
                 "poster_path":  
                  "https://image.tmdb.org/t/p/w440_and_h660_face/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
                  "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
                 
                
               },
            ])
        
        const fetchProduct = async (repsonse_part) => {
            const resp = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1${repsonse_part}`)
            return resp.json()
        }
        useEffect (() => {
            fetchProduct(id)
            .then (resp => console.log(resp))
        },[])
    return (
   
       
        <>
       
          <div className="container">
            
           
            <div >{banner.title}</div>
            <img src={banner.poster_path} />
            </div>
            
            
        </>
        )
    }
  

