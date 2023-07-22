import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="brand" href="/">OnlineStore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav m-auto my-2 my-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Trending</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link " href="/" >
            Shop
          </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/" >Cart</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="px-2 search" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  
   
    
 
  )
}

