import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <link to href="/" className="nav-link active" aria-current="page" >Home</link>
        </li>
        <li className="nav-item">
          <link to="/About" className="nav-link" >{props.aboutText}</link>
        </li>
      </ul>
      {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>*/}

      <div className={`form-check form-switch ${props.mode==='dark'?'light':'dark'}`}>
       <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
      </div>

    </div>
  </div>
</nav>
  );
}
// eslint-disable-next-line react/no-typos
Navbar.PropTypes = {
                    title:PropTypes.string.isRequired,
                    aboutText:PropTypes.string.isRequired
                } 

 Navbar.defaultProps = {
                        title:'set title here',
                        aboutText:'About'
                    }                     