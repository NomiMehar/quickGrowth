import React, { useEffect } from 'react'
import AOS from 'aos';
import './WebMaintenanceBanner.scss'
import { Link } from 'react-router-dom'
function WebMaintenanceBanner() {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
        <React.Fragment>
                <div className="webMaintenanceBanner">
                    <div className="container">
                        <div className="row">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <h2>Website Maintenance</h2>
                                <p>Website maintenance involves regular updates, security checks, and performance optimizations to keep a site running smoothly and securely.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadCrumbs">
            <div className="container">
                <p data-aos="fade-left" data-aos-duration="1000">
                <Link to="/" className='home'>Home</Link>
                <span>/</span>
                <Link to="/services/web/website-maintenance" className='page'>Website Maintenance</Link>
                </p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default WebMaintenanceBanner
