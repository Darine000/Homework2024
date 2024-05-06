import React, { useState } from "react";
import '../src/index.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <nav className="navbar bg-dark fixed-top bg-body-tertiary navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">ArtInside</a>
        <div style={{ display: 'flex', marginRight: '30px' }}>
          <div className="dropdown-container">
            <button type="button" className="btn form-dropdown-toggle" onClick={toggleDropdown} aria-expanded={dropdownOpen}>
              Dropdown form
            </button>
            <form className={`dropdown-menu p-4 ${dropdownOpen ? 'show' : ''}`} style={{ width: '300px' }}>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormEmail2" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                  <label className="form-check-label" htmlFor="dropdownCheck2">
                    Remember me
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
          </div>
          <div className="dropdown-container">
            <button className="btn regular-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
