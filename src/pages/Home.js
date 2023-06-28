import Card from "../components/Card"
import Carousel from "../components/Carousel"
import { NavBar } from "../components/NavBar"
import Trending from "../components/Trending"
import { Popular } from "../components/mostPopular"

export const Home = () => {
    return(
    <>
      
          <Popular />
          <Trending />
    </>
    )
}