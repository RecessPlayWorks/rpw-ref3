import React from 'react'
import styled from '@emotion/styled';
import NavLink from './NavLink';

const StyledBurgerMenu = styled('div')`

@media only screen and (min-width: 360px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;

    .hamburger {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 60px;
        height: 8vh;
        padding: 0.7rem;
        background-color: var(--landing-primary-color);
        display: flex;
        align-items: center;
        justify-content: center;

        .mid-line {
            position: relative;
            width: 100%;
            height: 2px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease-in-out;
            &:before,
            &:after {
                content: "";
                position: absolute;
                z-index: 1;
                top: -10px;
                width: 100%;
                height: 2px;
                background-color: inherit;
            }
            &:after {
                top: 10px;
            }
        }
    }
}
    input.toggler {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        width: 50px;
        height: 50px;
        opacity: 0;

        &:checked {
            & + .hamburger .mid-line {
                transform: rotate(135deg);
                &:before,
                &:after {
                    top: 0;
                    transform: rotate(90deg);
                }
            }
            & ~ .menu {
                visibility: visible;
                & > div {
                    transform: scale(1);
                    transition-duration: var(--menu-speed);
                    & > nav {
                        opacity: 1;
                        transition:  opacity 0.4s ease 0.4s;
                    }
                }
            }
        }
  }
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    & .menu-wrapper {
        background: var(--overlay-color);
        border-radius: 50%;
        width: 250vw;
        height: 250vw;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: all 0.3s ease;
       }
    & nav {
        text-align: center;
        max-width: 90vw;
        max-height: 100vh;
        opacity: 0;
        transition: opacity 0.4s ease;
    }
    & ul > li {
        list-style: none;
        color: #fff;
        font-size: 1.5rem;
        padding: 1rem;
        
        & a {
            color: #fff;
            font-size: 12vw;
            font-weight: 100;
            text-decoration: none;
            transition: color 0.4s ease;
        }
    }

  }

@media only screen and (min-width: 610px) {
       display: none;
}
`;
const BurgerMenu = () => (<StyledBurgerMenu className="burger-menu-wrap">
    <input type="checkbox" className="toggler" />
    <div className="hamburger">
        <div className="mid-line"></div>
    </div>
    <div className="menu">
        <div className="menu-wrapper">
            <nav>
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
                    <li>
                        <NavLink to="/" activeClassName="current-page" textContent="Events" />
                    </li>
                </ul>
            </nav>
        </div>
    </div>

</StyledBurgerMenu>
);

export default BurgerMenu;