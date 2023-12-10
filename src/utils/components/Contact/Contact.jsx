"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import {motion} from 'framer-motion'
import { tagVariants, titleVariants } from '../../animation';

export const Contact = () => {

  const featureVariants = () => ({
    offscreen: {
        scale: 0.5
    },

    onscreen: {
        scale: 1,
        transition: {
            type: "spring",
            duration: 1.5,
        }
    }
})

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
    <center>
    <div
    className="wrapper1">

          <div className="hiw-head">
            <center>
                <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants(0.2)}
                    className='title'>Let's Work Together</motion.span>
                    </center>
          </div>
      <center>
    <motion.div
     initial="offscreen"
     whileInView={"onscreen"}
     variants={featureVariants(0.2)}
    class="wrapper">
    <div class="title">
    <h1>contact us</h1>
    </div>

    <form class="contact-form" ref={form} onSubmit={sendEmail}>

    <div class="input-fields" >
      <input type="text" class="input" placeholder="Name"/>
      <input type="text" class="input" placeholder="Email Address"/>
      <input type="text" class="input" placeholder="Phone"/>
      <input type="text" class="input" placeholder="Subject"/>
    </div>

    <div class="msg">
      <textarea placeholder="Message"></textarea>
      <div class="btn">send</div>
    </div>

  </form>
</motion.div>
</center>
</div>
</center>
  );
};
    

export default Contact
