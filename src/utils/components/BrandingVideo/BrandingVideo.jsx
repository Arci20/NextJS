"use client"

import React, { useRef } from 'react'
import "./BrandingVideo.css"
import {motion, useScroll, useTransform} from 'framer-motion'

const BrandingVideo = () => {
  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })
  
  const scale = useTransform(scrollYProgress, [0,1], [.6,1])

  return (
    <div>
      <div className="bv-container">
        <div className="container">
             <center>
            <motion.video ref={ref}
             className='bv-video'  src="/qwer.mp4" type='video/mp4' controls style={{scale}} />
            </center>
        </div>
      </div>
    </div>
  )
}

export default BrandingVideo
