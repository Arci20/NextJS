import React from 'react'
import './Testimonials.css'
import SlickSlider from './SlickSlider'
const Testimonials = () => {
  return (
    <div>
      <div className="t-wrapper">
        <div className="container">
            <div className="t-container">
                <div className="t-head">
                    <span className='tag'>Testimonials</span>
                    <span className='title'>Team up with the Best Creative Team</span>
                    <span className='des'>What people say about us</span>
                </div>

                
               
            </div>
            {/* slider */}
            <SlickSlider/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
