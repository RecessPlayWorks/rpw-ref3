import React from 'react'
import { navigate } from 'gatsby-link'
import styled from '@emotion/styled';

const StyledContactContainer = styled.section`
  margin: 2vh auto;
  width: 90vw;
  height: 88vh;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  Helvetica, Arial, sans-serif;
  padding-top: 2%;
  h1 {
    color: #000;
    margin: 2vh auto 0;
    font-weight: 100;
  }
  form {
    width: 100%;
    margin: -2vh auto;
  }
  form input[type=text], input[type=email], textarea {
    font-size: 1.5rem;
    font-weight: 200;
  }
  p {
    text-align: left;
    width: 90vw;
  }
  label {
    font-size: 0.9rem;
  }
  input, textarea {
    display: block;
    width: 90vw;
    height: 8vh;
  }
 input {
    //  height: 5vh;
 }
 textarea {
    height: 20vh;
 }
 p:last-of-type {
   text-align: center;
 }
 button {
    width: 40vw;
    height: 8vh;
    // margin: auto;
    background: #6c8a6c;
    color: #fff;
    font-size: 0.8rem;
 }
`;


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

// export default function Contact() {
  const ContactForm = () => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <StyledContactContainer className="contact-container">
      <h1>Contact Us</h1>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            email:
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            message:
            <textarea name="message" onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </StyledContactContainer>

  )
}

export default ContactForm;