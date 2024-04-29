// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
  useEffect(() => {
    const dropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdown, {});
  }, []);

  return (
    <div className="navbar-fixed">
      <nav className="white">
        <div className="nav-wrapper">
          <div className="container">
            <a href="#/" className="brand-logo">
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
        {                
          window.location.href === 'https://aardiiaansyaahhhtnjng.github.io/contohlangsunghapus/#' ?
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#/"><b>Home</b></a>
                </li>
              </>
            :
            (
              window.location.href === 'https://aardiiaansyaahhhtnjng.github.io/contohlangsunghapus/#/modbus' ? 
                  <>
                    <li className="nav-item">
                      <a className="nav-link active" href="#/modbus">Cara akses Modbus TCP ctrlX</a>
                    </li>
                  </>
                :
                (
                  window.location.href === 'https://aardiiaansyaahhhtnjng.github.io/contohlangsunghapus/#/sorting' ? 
                    <>
                      <li className="nav-item">
                        <a className="nav-link active" href="#/sorting">Cara storing data kedalam Influxdb dengan ctrlX</a>
                      </li>
                    </>
                  :
                  (
                    window.location.href === 'https://aardiiaansyaahhhtnjng.github.io/contohlangsunghapus/#/hmi' ? 
                      <>
                        <li className="nav-item">
                          <a className="nav-link active" href="#/hmi">HMI(WebIQ & Node-RED)</a>
                        </li>
                      </>
                    :
                    <>
                      <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#/">Home</a>
                        <a className="nav-link" href="#/modbus">Cara akses Modbus TCP ctrlX</a>
                        <a className="nav-link" href="#/sorting">Cara storing data kedalam Influxdb dengan ctrlX</a>
                        <a className="nav-link" href="#/hmi">HMI(WebIQ & Node-RED)</a>
                      </li>
                    </>
                  )
                )
            )
        }
      </ul>
    </div>
  );
}

export default Navbar;