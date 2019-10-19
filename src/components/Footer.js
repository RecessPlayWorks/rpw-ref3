import React from 'react';
import styled from '@emotion/styled';
import fbIcon from '../img/fb-icon.png'
import gramIcon from '../img/gram-icon.png'

const StyledFooter = styled('footer')`
  width: 100vw;
  margin-top: -2vh;
  background: lightcoral;
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
  height: auto;
  section {
    margin: 3vh auto 3vh 3vw;
    p {
      font-size: 0.8rem;
      line-height: 1.2;
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
        <a href = "https://www.instagram.com/recessridgefield/" target="_blank" rel="noopener noreferrer"> 
        <img src={gramIcon} alt="instagram icon" />
      </a>
      <a href = "https://www.facebook.com/recessct/?ref=br_rs" target="_blank" rel="noopener noreferrer"> 
        <img src={fbIcon} alt="facebook icon" />
      </a>
        </div>
  </StyledFooter>
);

export default Footer;