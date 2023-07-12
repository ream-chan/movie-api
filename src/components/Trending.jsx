import React, { useEffect, useState } from 'react'
import Card from './Card'
import img5 from '../images/john.jpg'
import Recommed from './Recommed'
import { Link } from 'react-router-dom'
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
        },
       {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        "release_date": "2021-12-15",
        "title": "Spider-Man: No Way Home",
       },
       {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
        "release_date": "2014-10-15",
        "title": "Fury",
       },
       {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        "release_date": "1997-11-18",
        "title": "Titanic",
     
       },
       {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg",
        "release_date": "2023-04-26",
        "title": "The Black Demon",
       },
       {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
      "release_date": "2023-06-28",
      "title": "Indiana Jones and the Dial of Destiny",
       },
       {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/mpVGR5tPhTmTiqSu8kvrSsNCQLl.jpg",
        "release_date": "2023-04-06",
        "title": "Sanctuary",
       },
       {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
        "release_date": "2023-03-08",
        "title": "Scream VI",
       },
       {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/9YEGawvjaRgnyW6QVcUhFJPFDco.jpg",
        "release_date": "2023-06-16",
        "title": "Black Clover: Sword of the Wizard King",
       },
       {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/3LShl6EwqptKIVq6NWOZ0FbZHEe.jpg",
        "release_date": "2023-05-26",
        "title": "The Wrath of Becky",
       },
       {
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/5xeNPGbM8ImVdJACUoGpXT8Pxx3.jpg",
        "release_date": "2023-06-15",
        "title": "No Hard Feelings",
       }
      ])
      const[load, setLoad] = useState([])
      const [visible, setVisible]= useState(6);
      const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 6);
      }
      const getApii = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=2`)
        .then((resp) =>resp.json())
        .then((resp )=>setLoad(resp.results))
          }
      const getApi = () => {
       fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")
       .then(resp => resp.json())
       .then(resp => setTrending(resp.results))
         }
       
         useEffect(()=> {
          getApi()
          getApii()
        },[]) 
        
    return (
        <>
        <div className="trend">
          <img src={img5} alt="" />
          </div>
        <div className="container">
         
        <h1 className='title-trend'>Trending</h1>
        <div className="row g-3">
      {
         trending.slice(0, visible).map(props => (
          <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xxl-2' >
            <Link to={`/popular/${props.id}`} className='text-decoration-none'>
            <Card poster_path={props.poster_path} title={props.title} />
            </Link>
          </div>
        ))
      }
          {
         load.slice(0, visible).map(props => (
          <div className='col-6 col-sm-6 col-md-6 col-lg-3 col-xxl-2' >
            <Link to={`/popular/${props.id}`} className='text-decoration-none'>
            <Card poster_path={props.poster_path} title={props.title} />
            </Link>
          </div>
        ))
      }
      <button className='load' onClick={showMoreItems}>Load more</button>
       <Recommed />
      </div>
      </div>
      </>
  )
  
}
