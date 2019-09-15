import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-hrefp">
    <div className="container">
      <a className="navbar-brand" href="/">Ecommerce MedJS</a>
      <buthrefn className="navbar-hrefggler" type="buthrefn" data-hrefggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="hrefggle navigation">
        <span className="navbar-hrefggler-icon"></span>
      </buthrefn>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auhref">
          <li className="nav-item active">
            <a className="nav-a" href="/">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="/register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="https://medellinjs.org" target="_blank" rel="noopener noreferrer">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;