import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import Recommed from '../components/Recommed'

export default function MovieDetail() {
    const { id } = useParams()
    const [banner, setBanner] = useState({
        "id": "",
        "poster_path": "https://image.tmdb.org/t/p/w440_and_h660_face/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        "overview": "ith the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        "title": "John Wick: Chapter 4",
        "backdrop_path": "https://image.tmdb.org/t/p/w440_and_h660_face/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
        "name": "Keanu Reeves",
        "popularity": 60.215,
        "profile_path": "https://image.tmdb.org/t/p/w440_and_h660_face/rRdru6REr9i3WIHv2mntpcgxnoY.jpg",
        "character": "John Wick",
    })
    const fetchProduct = async (pid) => {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/popular/${pid}api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
        return resp.json()
    }
    useEffect(() => {
        fetchProduct(id)
            .then(resp => console.log(resp.results))
    })

    return (


        <main>
            <div className="backdrop" style={{
                backgroundImage: `url(${banner.backdrop_path})`
            }}>
            </div>
            <img src={banner.poster_path} alt="" className='banner_post' />
            <h1 className='movie-title'>{banner.title}</h1>
            <p className='movie-des'>{banner.overview}</p>

            <h1 className='title-cast'>Cast</h1>
            <div className="cast">
                <img src={banner.profile_path} alt="" className='cast-profile' />
            </div>


            <button type="button" class="btn btn-primary watch" data-bs-toggle="modal" data-bs-target="#exampleModal">
                watch trailer
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <iframe width="500" height="355" src="https://www.youtube.com/embed/yjRHZEUamCc"
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                                picture-in-picture; web-share" allowfullscreen ></iframe>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <Recommed />
        </main>
    )
}


