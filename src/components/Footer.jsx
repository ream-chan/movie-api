import React from 'react'

export default function Footer() {
    return (
        <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom border-bottom-c pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 list ">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 list">Trending</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 list">Upcoming</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 list">Subcription</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 list">About</a></li>
          </ul>
          <p className="text-center list">© 2023 Company, Inc</p>
        </footer>
      </div>
    )
}
