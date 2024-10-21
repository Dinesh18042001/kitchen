"use client";
import React, { useEffect } from 'react';
import SignUp from './Modal/SignUp';
import Login from './Modal/Login';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.navbar');
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add('header-scrolled');
      } else {
        nav.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">Kitchen</a>
          <button
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            className="d-lg-none navbar-toggler"
            type="button"
          >
            {/* Profile Icon */}
            <svg className="profile-icon" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path>
              <path d="M18 20c0-3.31-2.69-6-6-6s-6 2.69-6 6"></path>
            </svg>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active me-4" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-4" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-4" aria-current="page" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex ms-4">
              <div className="nav-btn">
                <a 
                  className="me-2" 
                  href="#" 
                  data-bs-toggle="modal" 
                  data-bs-target="#loginModal"
                >
                  Login
                </a>
              </div>
              <div className="nav-btn ms-3">
                <a 
                  className="me-2" 
                  href="#" 
                  data-bs-toggle="modal" 
                  data-bs-target="#signupModal"
                >
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navbar</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <form className="d-flex mt-4">
            <div className="nav-btn">
              <a 
                className="me-2" 
                href="#"
                data-bs-toggle="modal" 
                data-bs-target="#loginModal"
              >
                Login
              </a>
            </div>
            <div className="nav-btn">
              <a 
                className="me-2" 
                href="#"
                data-bs-toggle="modal" 
                data-bs-target="#signupModal"
              >
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Modals */}
      <SignUp />
      <Login />
    </>
  );
}
