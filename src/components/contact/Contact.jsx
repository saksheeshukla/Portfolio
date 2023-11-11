import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsDiscord} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {

  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__options-icon'/>
            <h4>Email</h4>
            <h5>sakshee1234shukla@gmail.com</h5>
            <a href="mailto:sakshee1234shukla@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
          <BsDiscord className='contact__options-icon'/>
            <h4>Discord</h4>
            <h5>@me</h5>
            <a href="https://discord.com/channels/@me" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
          <BsLinkedin className='contact__options-icon'/>
            <h4>Linkedin</h4>
            <h5>sakshee-shukla-2950b823a</h5>
            <a href="https://www.linkedin.com/in/sakshee-shukla-2950b823a/" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
