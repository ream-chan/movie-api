import { NavLink } from "react-router-dom";

export function NavBar () {
    return (
        <header className="sticky-top">
          
            <nav>
                <label className="logo">ReamMovie</label>
                <ul>
                    <NavLink  className={({isActive}) => isActive ? "navbar-brand text-decoration-none  ative" : "navbar-brand text-decoration-none normal "} to={"/"} >Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? "navbar-brand text-decoration-none   ative" : "navbar-brand text-decoration-none normal "}>Trending</NavLink>
                    <NavLink className={({isActive}) => isActive ? "navbar-brand text-decoration-none   ative" : "navbar-brand text-decoration-none normal "}>Upcoming</NavLink>
                    <NavLink className={({isActive}) => isActive ? "navbar-brand text-decoration-none   ative" : "navbar-brand text-decoration-none normal "}>Top Rated</NavLink>
                    <NavLink className={({isActive}) => isActive ? "navbar-brand text-decoration-none   ative" : "navbar-brand text-decoration-none normal "}>Subcription</NavLink>
                </ul>
            </nav>
           
        </header>
    )
}