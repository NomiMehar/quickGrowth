import React, { useEffect } from 'react'
import AOS from 'aos';
import './HoistingBanner.scss'
import { Link } from 'react-router-dom'
function HoistingBanner() {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
        <React.Fragment>
                <div className="hoistingBanner">
                    <div className="container">
                        <div className="row">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <h2>Hosting</h2>
                                <p>Create the website you envision with reliable, scalable, and free web hosting to establish your online presence in Canada.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadCrumbs">
            <div className="container">
                <p data-aos="fade-left" data-aos-duration="1000">
                <Link to="/" className='home'>Home</Link>
                <span>/</span>
                <Link to="/services/hosting" className='page'>Hosting</Link>
                </p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default HoistingBanner
