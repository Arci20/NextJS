"use client"
import React from 'react'
import './WhatWeDo.css'
import { features } from '../../data'
import Image from "next/image"
import {motion} from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../animation'


const WhatWeDo = () => {
  return (
    <div>
      <div className="wwd-wrapper">
        <div className="container">
            <div className="wwd-container">

                {/* head of section */}
                <div className="wwd-head">
                    <motion.span 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants(0.3)}
                    
                    className='tag'>What we do</motion.span>

                    <motion.span 
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={tagVariants(0.2)}
                    className='title'>Helping Founders With Proven Strategies And Creativity Expertise</motion.span>

                    <motion.span 
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={desVariants(0.1)}
                    className='des'>Here is how we can help</motion.span>
                </div>

                {/* two blocks */}
                <div className="wwd-blocks">
                    {/* first block */}
                    <div className="wwd-block">
                        <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants(0.3)}
                        className='sec-title'>Create</motion.span>
                        
                        <motion.span
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={desVariants(0.2)}
                        className='text'>Create required assets</motion.span>
                        
                        <div className="block-features">
                           {
                            features.slice(0,3).map((feature, i) => (
                                <motion.div 
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={containerVariants((i+1)*0.1)}
                                className='block-feature' key={i}>
                                 <Image src={feature.icon} alt='feature' width={60} height={60} />
                                
                                <span>{feature.title}</span>
                                </motion.div>
                            ))
                           }
                        </div>
                    </div>

                    {/* second block */}
                    <div className="wwd-block">
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants(0.3)}
                    className='sec-title'>Maximize</motion.span>

                        <motion.span 
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={desVariants(0.2)}
                        className='text'>Maximize potentials</motion.span>
                        
                        <div className="block-features">
                           {
                            features.slice(3,6).map((feature, i) => (
                                <motion.div 
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={containerVariants((i+1)*0.1)}
                                className='block-feature' key={i}>
                                 <Image src={feature.icon} alt='feature' width={60} height={60} />
                                
                                <span>{feature.title}</span>
                                </motion.div>
                            ))
                           }
                        </div>
                    </div>
                </div>

                {/* support block */}
                <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={containerVariants(0.3)}
                className="wwd-support">
                    {/* left side */}
                <div>
                 <span className='sec-title'>Our Mission</span>
                 <span className='des'> Collaboration, Integrity, and Deep Understanding</span>
                 </div>
            {/* right side */}
            <div>
                <span className='text'>
                Our mission is to ignite and elevate brands through innovative and purpose-driven creativity. 
                </span>

                <span className='text'>
                At (Creative Agency Name), we don't just create campaigns; we craft legacies. Every project is an opportunity to leave an indelible mark on the world, and we embrace this responsibility with passion, purpose, and an unwavering dedication to excellence.
                </span>
            </div>
            </motion.div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
