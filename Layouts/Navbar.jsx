import React from 'react';
import { Link } from 'react-router-dom';
import jazzyLogo from '../assets/image 2.svg';
import location from '../assets/Vector.svg';
import locationAddress from '../assets/Lagos, Nigeria.jpg';
import allProductsLogo from '../assets/Group 33.svg';
import guestLogo from '../assets/Group 34.svg';
import notificationLogo from '../assets/Group 2.svg'
const Navbar = () => {
  return (
    <div className='container'>
        <header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-5'>
               <Link to='/'>
               <img className='image-fluid' src={jazzyLogo} alt="jazzy-logo" />
               </Link>
               <img className='image-fluid' src={location} alt="location-logo" />
               <img className='image-fluid' src={locationAddress} alt="address-logo" />
            </div>
            <nav>
               <ul className='d-flex gap-4'>
                <li className='list-unstyled'>
                    <img src={allProductsLogo} alt="all-product-logo" />
                </li>
                <li className='list-unstyled'>
                    <img src={guestLogo} alt="all-product-logo" />
                </li>
                <li className='list-unstyled'>
                    <Link to='/Cart'>
                    <img className='image-fluid' src={notificationLogo} alt="notification-logo" />
                    </Link>
                </li>
               </ul>
            </nav>
        </header>

    </div>
  )
}

export default Navbar