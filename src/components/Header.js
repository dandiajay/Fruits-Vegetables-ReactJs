import Logo from '../assets/Images/logo.png.png';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import React from 'react';

const Header = ({ handleSearch }) => {
  const [{ basket }] = useStateValue();

  return (
    <>
      <nav>
        <nav class="navbar container-fluid navbar-expand-lg  header fixed-top" >
          <div class="container fs-3  border-bottom border-dark" >
            <Link to="/home" class="navbar-brand"> <img src={Logo} alt="" className=' img-fluid w-25' /></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/home" class="nav-link nav-items " aria-current="page" >Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/fruits" class="nav-link nav-items" >Fruits</Link>
                </li>
                <li class="nav-item">
                  <Link to="/vegetable" class="nav-link nav-items">Vegetable</Link>
                </li>

                <li class="nav-item">
                  <Link Link to="/contact" class="nav-link nav-items" >Contact-us</Link>
                </li>
              </ul>
             <form className="d-flex">
             <input
              className="form-control w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
            />
             <Link to="/checkOut" className="text-decoration-none mx-4 text-dark">
              <i className="bi bi-cart4 fs-3"></i>
              <span className="mt-5 fs-2">{basket.length}</span>
            </Link>
              </form>
            </div>
          </div>
        </nav>
      </nav>

    </>
  )
}
export default Header;