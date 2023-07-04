import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <>
        <header className="sticky-top">
          
            <nav >
                <label className="logo">ReamMovie</label>
               
            
               
                    <ul>
                        <NavLink className={({ isActive }) => isActive ? "navbar-brand text-decoration-none  ative" : "navbar-brand text-decoration-none normal"} to={"/"} >Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "navbar-brand text-decoration-none   ative" : "navbar-brand text-decoration-none normal "} to={"/trending"}>Trending</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "navbar-brand text-decoration-none   ative" : "navbar-brand text-decoration-none normal "} to={'/upcoming'}>Upcoming</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "navbar-brand text-decoration-none   ative" : "navbar-brand text-decoration-none normal "} to={"/toprated"}>Top Rated</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "navbar-brand text-decoration-none   ative" : "navbar-brand text-decoration-none normal"} to={"/subcribe"}>Subcription</NavLink>
                    </ul>
              
            </nav>
        
        </header>
        </>
    )
}