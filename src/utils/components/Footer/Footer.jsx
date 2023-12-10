"use client"
import React, { useRef } from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import { Logos, Medias } from '../../data'

const Footer = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="container">
      <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4 className='info'>Info</h4>
          <ul class="links">
          <Link to='wwd-wrapper' spy={true} smooth={true}>
            <span>What we do</span>
            </Link>
            <Link to='od-wrapper' spy={true} smooth={true}>
            <span>Our services</span>
            </Link>
            <Link to='hiw-wrapper' spy={true} smooth={true}>
            <span>How it works</span>
            </Link>
            <Link to='t-wrapper' spy={true} smooth={true}>
            <span>Testimonials</span>
            </Link>
            <Link to='wrapper1' spy={true} smooth={true}>
            <span>Contact</span>
            </Link>
          </ul>
        </div>

        <div class="footer-cols">
          {
            Logos.map((Logo, i) =>(
              <center>
              <img className='logos' height={125} width={125} key={i} src={Logo.icon} alt="" />
              </center>
            ))
          }
        </div>

        <div class="footer-col">
          {/* <h4>Email Us</h4>
          <p>
            Email us for inquiries and exclusive offers.
          </p>
          <form action="#" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your email" required/>
            <button type="submit">SEND</button>
          </form> */}
          <div className="follow">
          <center><h4>Follow Us</h4></center>
          </div>
          <div class="icons">
            {
              Medias.slice(0,3).map((Media, i) => (
                <a href={Media.link}>
                <img height={30} width={30} key={i} src={Media.icon}></img>
                </a>
              ))
            }
            {/* <i class="">
                <img src="./public/footer/fb.png" alt="" />
            </i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i> */}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Footer
