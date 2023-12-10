"use client"
import React from 'react'
import './OurServices.css'
import { features, ourDiffFeatures } from '../../data'
import {motion} from 'framer-motion'
import { containerVariants, tagVariants, titleVariants } from '../../animation'
const OurServices = () => {
  return (
    <div className='od-wrapper'>
      <div className="container">
        <div className="od-container">
          {/* head */}
            <div className="od-head">
               <motion.span 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants(0.2)}
               className='tag'>Our Services</motion.span> 
               <motion.span
               initial="offscreen"
               whileInView={"onscreen"}
               variants={titleVariants(0.5)}
               className='title'>Fair price, hassle free</motion.span>
            </div>

            {/* feature */}
            <center>
            <div className="od-features">
              {
                ourDiffFeatures.map((feature, i) => (
                  <motion.div className='od-feature' 
                   initial="offscreen"
                   whileInView="onscreen"
                   variants={containerVariants((i+1)*0.1)}
                   key={i}>
                    <span className='sec-title'>{feature.title}</span>
                    <img
                    src={feature.icon} alt="feature" width={272} height={390}/>
                    {/* <span className='text'>{feature.des}</span> */}
                    <div
                    onClick={() => window.open(feature.link)}>
                     <button>
                      <a href={feature.link}>Select this</a>
                     </button>
                    </div>
                  </motion.div>
                ))
              }
            </div>
            </center>
        </div>
      </div>
    </div>
  )
}

export default OurServices


