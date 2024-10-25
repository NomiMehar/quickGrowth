import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import './SaasSolBanner.scss'

const SaasSolBanner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <React.Fragment>
            <div className="WebAppBanner">
                <div className="container">
                    <div className="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>SaaS Solution</h2>
                            <p>Our SaaS development company leverages cutting-edge software development practices to build secure, cloud-based products tailored to the Canadian.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadCrumbs">
                <div className="container">
                    <p data-aos="fade-left" data-aos-duration="1000">
                    <Link to="/" className='home'>Home</Link>
                    <span>/</span>
                    <Link to="/services/software/saas-solution" className='page'>SaaS Solution</Link>
                    </p>
                </div>
            </div>
</React.Fragment>
  )
}

export default SaasSolBanner