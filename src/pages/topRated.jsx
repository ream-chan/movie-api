import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function TopRated() {
 const [rated, setRated] = useState([
    {
        "backdrop_path": "https://image.tmdb.org/t/p/w440_and_h660_face/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "title": "The Godfather",
        "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
       
    },
   {
    "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
      "release_date": "1994-09-23",
      "title": "The Shawshank Redemption",
   },
   {
    "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/bMadFzhjy9T7R8J48QGq1ngWNAK.jpg",
    "release_date": "1974-12-20",
    "title": "The Godfather Part II",
   },
   {
    "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
    "release_date": "1995-10-19",
    "title": "Dilwale Dulhania Le Jayenge",
   },
   {
    "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    "release_date": "1993-12-15",
    "title": "Schindler's List",
   },
   {
    "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "release_date": "2023-05-31",
    "title": "Spider-Man: Across the Spider-Verse",
   },
   {
    "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "release_date": "2001-07-20",
    "title": "Spirited Away",
   },
   {
    "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/q719jXXEzOoYaps6babgKnONONX.jpg",
    "release_date": "26-08-2016",
    "title": " Your Name  ",
   },
])
const getApi = async () => {
   
   const resp = await  fetch("https://api.themoviedb.org/3/movie/603692/reviews?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US")
   const result = resp.json()
   return result
}
useEffect(() => {
    getApi()
    .then (resp =>  console.log(resp.results))
    
})

    return (
        <>
    
        <div className='container'>
          
          <h1 className='popular-title'>Top Rated</h1>
           <div className="row g-5">
                   {
                     rated.map(p => (
                        <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xxl-2'>
                        <Link to={`/toprated${p.id}`} className='text-decoration-none' >
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

