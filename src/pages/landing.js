import React from 'react';
import styled from '@emotion/styled';

import NavLink from '../components/subcomponents/NavLink'
/* images imports */
import landingLogo from '../img/rpw-landing-icon.jpg';
import boy from '../img/boy.jpg';
import women from '../img/women.jpg';
import painting from '../img/painting.jpg';
import meeting from '../img/meeting.jpg';
// import NavLink from './subcomponents/NavLink';


// const NavLink = styled(Link)`
//   color: #fff;
//   font-size: 0.8rem;
// `;

const StyledLanding = styled.div`
  .flex-container {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    position: relative;
   }
   
   img {
    width: 100%;
    height: 100%;
   }
   section.landing-content-container {
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -25%;
        width: 50vw;
   }
   .landing-text-container {
        background: rgba(110, 66, 193, 0.9);
        padding: 1vh 2vw;
        position: relatve;

        & h2 {
            text-align: center;
            font-size: 1.2rem;
        }
        & p {
            color: #fff;
            text-align: left;
            line-height: 1.5;
            font-size: 0.9rem;
        }
   }
   .logo-container {
        margin: 0 auto 2vh auto;
   }
   button {
       width: 8vw;
       height: 5vh;
       border: 2px solid blue;
       background-color: orange;
       a {
           color: #fff;
           font-weight: 400;
       }
   }

   @media only screen and (min-width: 319px) {
    .cell {
        width: 500px;
        height: 300px;
        flex-grow: 1;
       }
    section.landing-content-container {
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -40vw;
        width: 80vw;
        & .logo-container {
            width: 60vw;
            margin: 0 auto 2vh auto;
       }
        & .landing-text-container {
            & p {
                line-height: 1.2;
                font-size: 0.9rem;
                margin: 2vh auto;
            }
            & button {
                width: 30vw;
                margin-left: 10vw;
                left: 50%;
            }
        }
     }
   }

  @media only screen and (min-width: 610px) {
    .cell {
        width: 600px;
        height: 500px;
        flex-grow: 1;
       }
    section.landing-content-container {
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -40vw;
        width: 80vw;
        & .logo-container {
            width: 15vw;
            margin: 4vh auto;
            img {
                height: 100%;
            }
       }
       & .landing-text-container {
           button {
               width: 12vw;
               margin: 2vh auto;
           }
       }
     }
   }
  }
`;

const Landing = () => (
    <StyledLanding>
        <div className="flex-container">
            <div className="cell">
                <img src={women} alt="women" />
            </div>
            <div className="cell">
                <img src={boy} alt="boy" />
            </div>
            <div className="cell">
                <img src={painting} alt="painting" />
            </div>
            <div className="cell">
                <img src={meeting} alt="meeting" />
            </div>
            <section className="landing-content-container">
                <div className="logo-container">
                    <img src={landingLogo} alt="landing logo" />
                </div>
                <div className="landing-text-container">
                    <h2>It's time for Recess!</h2>
                    <p>Recess Playworks is going to be a unique place for modern families managing the work-life balance.</p>
                    <p>For the adults we will have a chic lounge, meeting rooms, a podcast room and phone rooms.</p>
                    <p>For the kids we will have classes including STEM, coding, chess, an all day art studio and a supervised free play zone.</p>
                    <p>Life gets busy and everyone needs a recess</p>
                    <p>Come join our growing list of people who want to be the first to know all the details!</p>

                    <button>
                        <NavLink to="/contact/" className="cta-join" activeClassName="" textContent="Join Up!" />
                    </button>
                </div>
            </section>
        </div>
    </StyledLanding>
)

export default Landing;