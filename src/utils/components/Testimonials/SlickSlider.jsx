import React from 'react'
import Slider from 'react-slick'
import { testimonialsData } from '../../data'
import './Testimonials.css'

const SlickSlider = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      touchMove: true,
      useCSS: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3, 
            infinite: true,
            dots: true,
          }
        },

        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2, 
            initialSlide: 2
          }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1, 
          }
        }
      ]
  }

  return (
    <div>
      <div>
        <Slider {...settings}>
            {
                testimonialsData.map((comment, i)=>(
                  <div key={i} className='comment'>
                     
                     <div className="c-content">
                        <img src={"/apos.svg"} className='apos-slider' width={40} height={30} alt="apos" />
                        <span className='des'>{comment.comment}</span>
                     </div>
                     
                    
                       <div className="c-info">
                        <div className="c-avatar">
                            {comment.name[0]}
                        </div>

                          <div className="c-person">
                            <span className='sec-title'>{comment.name}</span>
                            <span className='des'>{comment.profession}</span>
                          </div>
                     </div>
                  </div>
                ))
            }
        </Slider>
      </div>
    </div>
  )
}

export default SlickSlider
