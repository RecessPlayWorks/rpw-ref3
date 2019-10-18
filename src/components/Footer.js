import React from 'react';
import styled from '@emotion/styled';
import fbIcon from '../img/fb-icon.png'
import gramIcon from '../img/gram-icon.png'

const StyledFooter = styled('footer')`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px -2px 8px 0px rgba(0,0,0,0.8);
  .address {
    color: #fff;
  }
p {
  font-size: 1.3rem;
}

@media only screen and (min-width: 319px) {
  opacity: 1;
  height: auto;
  background: peachpuff;
  section {
    margin: 2%;
    p {
      font-size: 0.8rem;
    }
  }
  .social-icons {
    height: 100%;
    margin: auto 0;
    margin-right: 2vw;
      img {
        width: 15vw;
        margin: 1vh 2vw;
      }
    }
  }
@media only screen and (min-width: 610px) {
  opacity: 1;
  // height: 16vh;
  background: lightcoral;
  .social-icons {
    height: 100%;
    margin: 5vh 0;
    margin-right: 2vw;
      img {
        width: 4vw;
        margin: 1vh 0.5vw;
      }
    }  
}
`;

const Footer = () => (
  <StyledFooter>
        <section className="address">
          <p>Recess PlayWorks</p>
          <p>66 Danbury Road</p>
          <p>Ridgefield, CT 06877</p>
          <p>203-244-5928</p>
        </section>
        <div className="social-icons">
        <img src={fbIcon} alt="facebook icon" />
        <img src={gramIcon} alt="instagram icon" />

        </div>
  </StyledFooter>
);

export default Footer;