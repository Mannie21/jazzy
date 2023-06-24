import React from 'react';
import heroImage from '../../assets/image 3.svg'

function Hero() {
  return (
    <div className='container' >
        <img className='img-fluid w-100' src={heroImage} alt="hero-image" />
    </div>
  )
}

export default Hero