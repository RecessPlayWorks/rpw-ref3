import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
/* images imports */
import landingLogo from '../img/rpw-landing-icon.jpg';
import boy from '../img/boy.jpg';
import women from '../img/women.jpg';
import painting from '../img/painting.jpg';
import meeting from '../img/meeting.jpg';

const NavLink = styled(Link)`
  color: #fff;
  font-size: 0.8rem;
`;

const StyledLanding = styled.div`
  .flex-container {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    position: relative;
   }
   .cell {
    width: 600px;
    height: 500px;
    flex-grow: 1;
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
        & h2 {
            text-align: center;
            font-size: 1.2rem;
        }
        & h3 {
            text-align: left;
            line-height: 2;
            font-size: 0.9rem;
        }
   }
   .logo-container {
        width: 10vw;
        // height: 320px;
        margin: 0 auto 2vh auto;
   }
   button {
       width: 8vw;
       height: 5vh;
       border: 2px solid blue;
       background-color: orange;
   }


   /* queries for iPhone 6/7/8 */
   @media only screen 
   and (min-device-width: 375px) 
   and (max-device-width: 667px) 
   and (-webkit-min-device-pixel-ratio: 2) { 
    .cell {
        width: 300px;
        height: 250px;
        flex-grow: 1;
       }
       section.landing-content-container {
            position: absolute;
            top: 0;
            left: 25vw;
            margin-right: -50vw;
            width: 100vw;
      }
          & h2 {
            text-align: center;
            font-size: 1.2rem;
        }
        & h3 {
            text-align: left;
            line-height: 2;
            font-size: 1rem;

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
                    <h3>Recess Playworks is going to be a unique place for modern families managing the work-life balance.</h3>
                    <h3>For the adults we will have a chic lounge, meeting rooms, a podcast room and phone rooms.</h3>
                    <h3>For the kids we will have classes including STEM, coding, chess, an all day art studio and a supervised free play zone.</h3>
                    <h3>Life gets busy and everyone needs a recess</h3>
                    <h3>Come join our growing list of people who want to be the first to know all the details!</h3>

                    <button>
                        <NavLink to="/contact/" className="cta-join">
                            Join Up!
                        </NavLink>
                    </button>
                </div>
            </section>
        </div>
    </StyledLanding>
)

export default Landing;