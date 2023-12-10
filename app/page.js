"use client"

import Navbar from '@/src/utils/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/utils/components/Hero/Hero';
import BrandingVideo from '@/src/utils/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/utils/components/WhatWeDo/WhatWeDo';
import OurServices from '@/src/utils/components/OurServices/OurServices';
import {motion, useAnimation} from 'framer-motion';
import HowItWorks from '@/src/utils/components/HowItWorks/HowItWorks';
import Contact from '@/src/utils/components/Contact/Contact';
import Testimonials from '@/src/utils/components/Testimonials/Testimonials';
import Footer from '@/src/utils/components/Footer/Footer';
import {Parallax} from 'react-parallax'
import { Backgrounds } from '@/src/utils/data';
export default function Home() {

  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
    <Navbar />
    {Backgrounds.map((Background, i) =>(
       <Parallax strength={-300} key={i}  bgImage={Background.icon}>
         <Hero />
       </Parallax>
    ))
   
    }

    <BrandingVideo />
    <WhatWeDo />

    <motion.div
    onViewportEnter={()=> controls.start({
      backgroundColor: "var(--secondary-color)"
    })}
    onViewportLeave={()=> controls.start({
      backgroundColor: "white"
    })}
    viewport={{amount: 0.4}}
    >
      <OurServices />
    </motion.div>
    <HowItWorks/>
       <Testimonials/>
       <motion.div
       onViewportEnter={()=> controls.start({
        backgroundColor: "var(--secondary-color)"
      })}
      onViewportLeave={()=> controls.start({
        backgroundColor: "white"
      })}
      viewport={{amount: 0.4}}
       >
       <Contact/>
       </motion.div>

   
    <Footer/>
  </motion.div>
  )
}
