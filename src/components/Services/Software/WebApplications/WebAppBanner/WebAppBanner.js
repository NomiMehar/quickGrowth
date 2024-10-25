import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import './WebAppBanner.scss'

const WebAppBanner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <React.Fragment>
            <div className="WebAppBanner">
                <div className="container">
                    <div className="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>Web App Development</h2>
                            <p>Boost your online presence and credibility with our dynamic, scalable web application development solutions tailored for Canadian businesses.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadCrumbs">
                <div className="container">
                    <p data-aos="fade-left" data-aos-duration="1000">
                    <Link to="/" className='home'>Home</Link>
                    <span>/</span>
                    <Link to="/services/software/web-applications" className='page'>Web App Development</Link>
                    </p>
                </div>
            </div>
</React.Fragment>
  )
}

export default WebAppBanner