import React from 'react';
import BurgerMenu from './subcomponents/BurgerMenu';
import NavLink from './subcomponents/NavLink';

const Header = () => (
  <header className="menu-header">
    <nav className="home-link">
      <ul>
        <li>
          <NavLink to="/" activeClassName="" textContent="RecessPlayWorks" />
        </li>
      </ul>
    </nav>
    <nav
      className="nav-menu">
      <ul>
        <li>
          <NavLink to="/" activeClassName="current-page" textContent="Home" />
        </li>
        <li>
          <NavLink to="/about/" activeClassName="current-page" textContent="About" />
        </li>
        <li>
          <NavLink to="/contact/" activeClassName="current-page" textContent="Contact" />
        </li>
      </ul>
    </nav>
    <BurgerMenu />

  </header>
);

export default Header;