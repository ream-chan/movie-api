import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'
import popApi from '../Api/popApi'

export  function Popular() {
  const [popular, setPopular] = useState ([
    {
    "id": 385687,
    "title": "Fast X",
     "poster_path" :  "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
     "first_air_date" : "",
    }
  ])
   const getApi = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
    .then(resp => resp.json())
    .then(resp => setPopular (resp.data))
  /  }
    useEffect(()=> {
       
    },[]) 
    
    return(
     <>
    
     <div className='container'>
        
        <h1>Most popular</h1>
         <div className='row g-5'>
                 {
                  popular && popular.map(props => (
                    <Card poster_path={poster_path} first_air_date={first_air_date} />
                  ))
                 }
        </div> 
       
      </div>
    </>
    )
}
