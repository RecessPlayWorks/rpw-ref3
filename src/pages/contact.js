import React from 'react';
import ContactForm from '../components/subcomponents/ContactForm'
import styled from '@emotion/styled';

import Layout from '../components/Layout'

const StyledContactContainer = styled.section`
margin: 2vh auto;
width: 50vw;
height: 84vh;
padding: 2%;
 input {
     width: 18vw;
     height: 5vh;
 }
 textarea {
    width: 22vw;
    height: 15vh;
 }
 button {
    width: 8vw;
    height: 4vh;
    background: green;
    color: #fff;
    font-size: 0.8rem;
 }
`;
const Contact = () => (
    <Layout>
        <StyledContactContainer className="contact-container">
        <ContactForm/>
        </StyledContactContainer>
    </Layout>
)


export default Contact;