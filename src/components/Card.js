import React from 'react'

const apiImg="https://image.tmdb.org/t/p/w440_and_h660_face";

export default function Card({poster_path, title, date}) {
  return (
    <>
      <div class="card vh-50" >
        <img src={apiImg+poster_path}class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{title} {date} </p>
        </div>
      </div>
    </>
  )
}

