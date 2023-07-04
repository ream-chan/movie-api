import Card from "../components/Card"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import { NavBar } from "../components/NavBar"
import Recommed from "../components/Recommed"
import Search from "../components/Search"
import Trending from "../components/Trending"
import { Popular } from "../components/mostPopular"


export const Home = () => {
    return(
    <>
    
          <Carousel />
          <Popular />
          <Search />
          <Recommed />
    </>
    )
}