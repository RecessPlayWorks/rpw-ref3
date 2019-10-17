import React from 'react';
import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #333;
  font-size: 0.8rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  
  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    className="menu-header">
    <nav className="home-link">
      <ul>
        <li>
          <NavLink to="/" fontWeight="bold">
            <h1>RecessPlayWorks</h1>
          </NavLink>
        </li>
      </ul>
    </nav>
    <nav
      className="nav-menu">
      <ul>

        <li>
          <NavLink to="/" activeClassName="current-page">
            Home
      </NavLink>
        </li>
        <li>
          <NavLink to="/contact/" activeClassName="current-page">
            Contact
      </NavLink>
        </li>
        <li>
          <NavLink to="/about/" activeClassName="current-page">
            About
      </NavLink>
        </li>
      </ul>
    </nav>
    <div className="burger-menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div className="mid-line"></div>
      </div>
      <div className="menu">
        <div className="menu-wrapper">
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="current-page">
                Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about/" activeClassName="current-page">
                About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact/" activeClassName="current-page">
                Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/" activeClassName="current-page">
                  Events
                </NavLink>
                </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;