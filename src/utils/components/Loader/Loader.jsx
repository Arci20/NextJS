"use client"

import React from 'react'
import './Loader.css'
import Image from "next/image"
import { Loads } from '../../data'
const Loader = () => {
  return (
    <div className='loader'>
      <div className='img-wrapper'></div>
       {
        Loads.map((Load, i) => (
           <Image key={i} src={Load.icon} width={30} height={30} alt="Loading">
            <defs>
              <linearGradient id='ttb' y2={1}>
               <stop offset="100%" stopOpacity={1} stopColor='#333'>
                 <animate 
                   attributeName='offset'
                   values='0;1;1;0'
                   repeatDur="indefinite"
                   repeatCount="5:00"
                   dur={4}
                   begin={0}
                 />
               </stop>

               <stop offset="100%" stopOpacity={1} stopColor='#E0E0E0'>
                 <animate 
                   attributeName='offset'
                   values='0;1;1;0'
                   repeatDur="indefinite"
                   repeatCount="5:00"
                   dur={4}
                   begin={0}
                 />
               </stop>
              </linearGradient>
            </defs>
           </Image>
        ))
       }
    </div>
  )
}

export default Loader
