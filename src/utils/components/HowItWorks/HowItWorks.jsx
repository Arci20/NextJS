"use client"
import React from 'react'
import './HowItWorks.css'
import { hitFeatures } from '../../data'
import {motion} from 'framer-motion'
import { tagVariants, titleVariants } from '../../animation'
const HowItWorks = () => {

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

  return (
    <div>
      <div className="hiw-wrapper">
        <div className="container">
            <div className="hiw-container">
                {/* head */}
                <div className="hiw-head">
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants(0.2)}
                    className='tag'>How it works</motion.span>
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants(0.5)}
                    className='title'>Unlocking potential along the growth journey</motion.span>
                </div>

                <div className="hiw-features">
                    {
                        hitFeatures.map((feature, i)=>(
                            <motion.div 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={featureVariants(0.2)}
                            className='hiw-feature'>
                            {/* left */}
                            <motion.div 
                            initial={{opacity: 0, x: -100}}
                            whileInView={{
                                opacity:1,
                                x: 0,
                                transition:{
                                    type: "easeIn",
                                    duration: 1,
                                    delay: .7
                                }
                            }}
                            className="detail" key={i}>
                                <span className='des'>0{i+1}</span>
                                <span className='sec-title'>{feature.title}</span>
                                <span className='text'>{feature.des}</span>
                                </motion.div>

                            {/* right */}
                            <div className="icons">
                                
                                <img src={feature.icon}
                                 alt="" width={125} height={128}
                                 style={{translate: "50% 0rem"}}/>
                            </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
