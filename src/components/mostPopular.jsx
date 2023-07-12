import React, { useEffect, useState } from 'react'
import Card, { img } from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'


export  function Popular() {
  const [popular, setPopular] = useState ([])
  const [rated, setRated] = useState([])
  const [visible, setVisible]= useState(6);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  }
  const getApii = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2`)
    .then((resp) =>resp.json())
    .then((resp )=>setRated(resp.results))
      }
  const getApi = () => {
   fetch(`https://api.themoviedb.org/3/movie/popular/?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1&limit=`)
   .then((resp) =>resp.json())
   .then((resp )=>setPopular(resp.results))
     }
     useEffect(()=> {
      getApi()
      getApii()
    },[]) 
  
    return(
     <>
    
      <div className='container'>
        
        <h1 className='popular-title'>Most popular</h1>
         <div className="row g-5">
                 {
                    popular.slice(0, visible).map(p => (
                      <div key={p.id} className='col-6 col-sm-6 col-md-6 col-lg-3 col-xxl-2'>
                      <Link to={`/popular/${p.id}`} className='text-decoration-none' >
                      <Card poster_path={p.poster_path} title={p.title} />
                      </Link>
                      </div>
                    ))
                 }
                 {
                    rated.slice(0, visible).map(p => (
                      <div key={p.id} className='col-6 col-sm-6 col-md-6 col-lg-3 col-xxl-2'>
                      <Link to={`/popular/${p.id}`} className='text-decoration-none' >
                      <Card poster_path={p.poster_path} title={p.title} />
                      </Link>
                      </div>
                    ))
                 }
                
                 <button className='load' onClick={showMoreItems}>Load more</button>
                 </div>
        </div> 
       
        
       
     
      
    </>
    )
}
