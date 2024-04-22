// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import M from 'materialize-css';

const Navbar = () => {
  useEffect(() => {
    // Inisialisasi sidenav dan dropdown setelah komponen dimuat
    const sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav, {});

    const dropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdown, {});
  }, []);

  return (
    <div className="navbar-fixed">
      <nav className="white">
        <a className="sidenav-trigger show-on-large" href="#!" data-target="slide-out" ><i className="material-icons">menu</i></a>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              <img src="https://media0.giphy.com/media/MJUyVWLgSR4ols9JZc/giphy.gif?cid=6c09b9528ueqydjqnpx29a3z4dp1wkvh5yf335be0twuswif&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" style={{ height: '60px', width: 'auto' }} alt="logo" />
            </a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#about" className="blue-text text-darken-4">About Us</a></li>
              <li><a href="#portfolio" className="blue-text text-darken-4">Portfolio</a></li>
              <li><a className="dropdown-trigger blue darken-3" href="#!" data-target="dropdown1">How-to articles<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </div>
      </nav>

      <ul id="dropdown1" className="dropdown-content">
        <li><a href="#!">Menghubungkan Modbus RTU ke ctrlX</a></li>
        <li><a href="#!">Cara akses Modbus TCP ctrlX</a></li>
        <li><a href="#!">Cara storing data kedalam Influxdb dengan ctrlX</a></li>
      </ul>
      
      <ul id="slide-out" className="sidenav">
        <li><a href="#!">Link 1</a></li>
        <li><a href="#!">Link 2</a></li>
        <li><a href="#!">Link 3</a></li>
      </ul>
    </div>
  );
}

export default Navbar;