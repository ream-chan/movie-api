import React from 'react'

const getPoster = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

export default function Card({poster_path, first_air_date}) {
  return (
    <>
      <div class="card" >
        <img src={poster_path}class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{first_air_date}</p>
        </div>
      </div>
    </>
  )
}
