import React from 'react'
import { useHistory } from "react-router-dom";


const Menu = () => {
  let history = useHistory();


  function handleLogout() {
    localStorage.removeItem('token');
    history.push("/");

  }


  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between bg-dark ">
        <a className="navbar-brand">Navbar</a>
        <div class="dropdown mr-5">
          <button class="btn btn-secondary dropdown-toggle mr-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Abbas
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" onClick={handleLogout}>Logout</a>
            <a class="dropdown-item" href="#">Summary</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Menu
