import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function TopRated() {
 const [rated, setRated] = useState([])
const getApi = () => {
  fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
  .then((resp) =>resp.json())
  .then((resp )=>setRated(resp.results))
    }
    useEffect(()=> { 
     getApi()
   },[]) 

    return (
        <>
    
        <div className='container'>
          <h1 className='popular-title'>Top Rated</h1>
           <div className="row g-5">
                   {
                     rated.map(p => (
                        <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xxl-2'>
                        <Link to={`/popular/${p.id}`} className='text-decoration-none' >
                        <Card poster_path={p.poster_path} title={p.title} date={p.release_date} />
                        </Link>
                        </div>
                      ))
                   }
                   </div>
          </div> 
      </>
  )
}

