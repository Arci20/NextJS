"use client"
import React, { useState } from 'react'
import './Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import { Link } from 'react-scroll'
import { Logos } from '../../data'
const Navbar = () => {
  const[mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const {scrollYProgress} = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });

  return (
   <div className={`n-wrapper ${navStyle}`}>
    {/* desktop version */}
    <div className="container">
      <div className="n-container">
        {/* left side */}
        <div className="n-logo">
        {
            Logos.map((Logo, i) =>(
              <center>
              <img height={45} width={45} key={i} src={Logo.icon} alt="" />
              </center>
            ))
          }
          </div>

        {/* right side */}
        <div className="n-right">
          <div className="n-menu">
            <Link to='wwd-wrapper' spy={true} smooth={true}>
            <span>What we do</span>
            </Link>
            <Link to='od-wrapper' spy={true} smooth={true}>
            <span>Our services</span>
            </Link>
            <Link to='hiw-wrapper' spy={true} smooth={true}>
            <span>how it works</span>
            </Link>
            <Link to='t-wrapper' spy={true} smooth={true}>
            <span>testimonials</span>
            </Link>
            <Link to='wrapper1' spy={true} smooth={true}>
            <span>Book a call</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* mobile version */}
    <div className="nm-container">
      {/* logo */}
      <span>{
            Logos.map((Logo, i) =>(
              <center>
              <img height={45}  width={45} key={i} src={Logo.icon} alt="" />
              </center>
            ))
          }</span>

      {/* menu icon */}
      {
        !mobileMenuOpened ?
        <BiMenuAltRight 
      size={30}
      onClick={() => setMobileMenuOpened(true)}
      /> : <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)}/> }

      {/* mobile menu */}
      <div className="nm-menu" style={{transform: mobileMenuOpened && "translateX(0%)"}}>
            <span>What We Do</span>
            <span>Our services</span>
            <span>how it works</span>
            <span>testimonials</span>
            <span>contact</span>
      </div>
    </div>
   </div>
  )
}

export default Navbar
