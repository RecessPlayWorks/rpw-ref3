import React from 'react';
import styled from '@emotion/styled';
import ContactForm from '../components/subcomponents/ContactForm';

import Layout from '../components/Layout'
import rpwLogo from '../img/rpw-landing-icon-300.jpg';
import gmap from '../img/gmap-medium.jpg';

const StyledContactContainer = styled.section`
  width: 100vw;
  grid-column: 1;
  text-align: center;
  margin: 2vh auto;
  .logo-container {
    margin: 2vh auto;
    width: 80vw;
  } 
  .logo-container img {
    width: 100%;
  }
  .contact-address {
    text-align: left;
    width: 90vw;
    margin: 2vh auto; 
  }
  .map-link {
    width: 100vw;
    img {
        width: 100%;
        &:hover {
            cursor: pointer;
        }
    }
  }  
  h1 {
    color: #000;
    margin: 0 auto;
    font-weight: 100;
  }
  
/* iPhone SE to iPad */
@media (min-width: 310px) and (max-width: 767px) {
    opacity: 1;
}

/* iPad and larger */
@media (min-width: 768px) {
    opacity: 1;
}
`;


const Contact = () => (
    <Layout>
            {/* section */}
        <StyledContactContainer className="contact-container">
        <div className="logo-container">
            <img src={rpwLogo} alt="landing logo" />
        </div>
        <div className="contact-address">
            <p>Recess PlayWorks</p>
            <p>66 Danbury Road</p>
            <p>Ridgefield, CT 06877</p>
            <p>203-244-5928</p>
        </div>
        <a className="map-link" href="https://www.google.com/maps/place/66+Danbury+Rd,+Ridgefield,+CT+06877/@41.290539,-73.495149,10z/data=!4m5!3m4!1s0x89c2aa39311a299b:0x7b7a1fee949f0c59!8m2!3d41.2905394!4d-73.4951493?hl=en-US" target="_blank" rel="noopener noreferrer"> 
           <img src={gmap} alt="google map" />
        </a>
          <h1>Contact Us</h1>
          <ContactForm/>
        </StyledContactContainer>
    </Layout>
)

export default Contact;