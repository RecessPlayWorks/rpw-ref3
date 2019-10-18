import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const StyledNavLink = styled(Link)`
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
  @media only screen and (min-width: 319px) {
    // .home-link {
      font-weight: bold;
  //  }
  }
`;

const NavLink = ({ to, activeClassName, textContent }) => (
  <StyledNavLink to={to} activeClassName={activeClassName}>{textContent}</StyledNavLink>
)

export default NavLink;