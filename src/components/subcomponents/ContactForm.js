import React from 'react'
import { navigate } from 'gatsby-link'
import styled from '@emotion/styled';

const StyledContactForm = styled.form`
  width: 90vw;
  margin: 2vh auto;
  
  & input[type=text], input[type=email], textarea {
    font-size: 1.1rem;
    font-weight: 100;
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
      <StyledContactForm
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
            <textarea type="text" name="message" onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </StyledContactForm>
  )
}

export default ContactForm;