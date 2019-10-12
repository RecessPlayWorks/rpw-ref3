import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #fff;
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
    // background: green;
  }
`;

const Header = () => (
  <header
    css={css`
      z-index: 10;
      position: fixed;
      top: 0;
      width: 100vw;
      height: 8vh;
      background: #f05323;
      box-shadow: 0px 5px 4px 0px rgba(0,0,0,0.7);
      display: flex;
      justify-content: space-around;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      font-size: 0.8rem;
    `}
  >
    <NavLink to="/" fontWeight="bold">
      <span>RecessPlayWorks</span>
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/contact/" activeClassName="current-page">
        Contact
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
    </nav>
  </header>
);

export default Header;