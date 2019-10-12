import React from 'react';
// import styled from '@emotion/styled';
import { css } from '@emotion/core';
// import { Link } from 'gatsby';

// const NavLink = styled(Link)`
// height: 10vh;
// background: red;
// `;

const Footer = () => (
  <footer
    css={css`
      width: 100vw;
      background: #ec0083;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      height: 5vw;
      box-shadow: 0px -2px 8px 0px rgba(0,0,0,0.8);
      z-index: 10;
      position: fixed;
      bottom: 0;
      p {
        font-size: 1.3rem;
      }
    `}
  >
  
    <div>
        <p>This is the Footer</p>
    </div>
  </footer>
);

export default Footer;