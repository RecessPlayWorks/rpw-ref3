import React from 'react';
import styled from '@emotion/styled';

import NavLink from '../components/subcomponents/NavLink'
/* images imports */
import rpwLogo from '../img/rpw-landing-icon-300.jpg';
// import boy from '../img/boy.jpg';
// import women from '../img/women.jpg';
// import painting from '../img/painting.jpg';
// import meeting from '../img/meeting.jpg';
// import NavLink from './subcomponents/NavLink';

/*abstract photo background into own component*/

// const NavLink = styled(Link)`
//   color: #fff;
//   font-size: 0.8rem;
// `;

const StyledLanding = styled.section`
    grid-column: 1;
    text-align: center;
    margin: 2vh auto;
    .logo-container {
        margin: 4vh auto;
    }
    .landing-text-container {
        margin-top: 2vh;
        text-align: left;
        font-size: 1.2rem;
        line-height: 1.6;
    }

    button {
        width: 12vw;
        min-width: 250px;
        height: 7vh;
        background-color: orange;
        margin: 3vh auto;
        font-size: 1.2rem;
        a {
            color: #fff;
            font-weight: 400;
        }
    }
    p {
        margin-left: 2vw;
        margin-top: 2vw;
      }
`;

const Landing = () => (
<StyledLanding className="landing-content-container">
        <div className="logo-container">
            <img src={rpwLogo} alt="landing logo" />
        </div>
        <h2>It's time for Recess!</h2>
        <div className="landing-text-container">
            <p>Recess Playworks is going to be a unique place for modern families managing the work-life balance.</p>
            <p>For the adults we will have a chic lounge, meeting rooms, a podcast room and phone rooms.</p>
            <p>For the kids we will have classes including STEM, coding, chess, an all day art studio and a supervised free play zone.</p>
            <p>Life gets busy and everyone needs a recess</p>
            <p>Come join our growing list of people who want to be the first to know all the details!</p>

        </div>
        <button className="cta-join">
            <NavLink to="/contact/" className="cta-join" activeClassName="" textContent="Join Up!" />
        </button>
    
</StyledLanding>
)

export default Landing;


/*
<div className="flex-container"> */
    /* <div className="cell">
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
    
    */

            