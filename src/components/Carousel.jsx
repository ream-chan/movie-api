import React from 'react';
import img1 from '../images/carousel1.jpg';
import img2 from '../images/carousel2.webp';
import img3 from '../images/carousel3.webp';
export default function Carousel() {
  return (
  <>
    <div id="carouselExampleIndicators" class="carousel slide ">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item active vh-80 ">
      <img src={img1} class="d-block w-100" alt="..." />
      <h1>Spider-Man: Across the Spider-Verse</h1>
      <p>After reuniting with Gwen Stacy, Brooklyn’s full-time, <br /> 
        friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, 
        a team of Spider-People <br /> charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, <br /> Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.

      </p>
    </div>
    <div class="carousel-item vh-80" >
      <img src={img2} class="d-block w-100" alt="..."/>
      <h1>John Wick: Chapter 4</h1>
      <p>With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. <br /> But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances <br /> across the globe and forces that turn old friends into foes.</p>
    </div>
    <div class="carousel-item vh-80">
      <img src={img3} class="d-block w-100" alt="..."/>
      <h1>The Super Mario Bros. Movie</h1>
      <p>While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi <br /> are transported down a mysterious pipe and wander into a magical new world. But when the brothers <br /> are separated, Mario embarks on an epic quest to find Luigi.

      </p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</>
  )
}
