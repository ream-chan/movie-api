import React from 'react'



export default function Card({poster_path, title, date}) {
  return (
    <>
      <div class="card" >
        <img src={poster_path}class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{title} </p>
          <p>{date}</p>
        </div>
      </div>
    </>
  )
}

