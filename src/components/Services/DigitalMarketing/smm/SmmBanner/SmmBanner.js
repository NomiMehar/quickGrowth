import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import './SmmBanner.scss'
import { Link } from 'react-router-dom'

const SmmBanner = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <React.Fragment>
         <div className="SmmBanner">
                    <div className="container">
                        <div className="row">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <h2>Social Media Marketing</h2>
                                <p>Many in Canada mistakenly equate social media marketing with digital marketing, though digital marketing encompasses much more.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadCrumbs">
                    <div className="container">
                        <p data-aos="fade-left" data-aos-duration="1000">
                        <Link to="/" className='home'>Home</Link>
                        <span>/</span>
                        <Link to="/services/branding/branding-agency" className='page'>Soacial Media Marketing</Link>
                        </p>
                    </div>
                </div>
    </React.Fragment>
  )
}

export default SmmBanner