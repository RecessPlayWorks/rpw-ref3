import React from 'react';
import styled from '@emotion/styled';
import fbIcon from '../img/fb-icon.png'
import gramIcon from '../img/gram-icon.png'

const StyledFooter = styled('footer')`
  width: 100vw;
  box-shadow: 0px -2px 8px 0px rgba(0,0,0,0.8);

  grid-row: 3;
  grid-column: 1;
  background: lightsalmon;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  padding: 1%;
  font-size: 1.1rem;
  height: 18vh;
  // flex-direction: column;
  // justify-content: center;
  position: relative;
    section {
      // border: 2px dashed #fff;
      min-width: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 4%;
    }
    .social-icons {
      grid-column: 2;
      display: flex;
      flex: flex-end;
      align-items: center;
      justify-content: center;  
      // border: 2px dashed #000;
    }

/* iPhone SE to iPad */
@media (min-width: 310px) and (max-width: 767px) {
  
  footer {
    section p {
      font-size: 70%;
    }
  }
  .social-icons {
    
    a {
      margin: 0 2vw;
      width: 16vw;
      img{
        width: 100%;
      }
    }
  }

}

/* iPad and larger */
@media (min-width: 768px) { 
    section p {
      font-size: 110%;
      line-height: 1.3;
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
