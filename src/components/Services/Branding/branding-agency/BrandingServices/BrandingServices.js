import React, { useEffect } from 'react'
import './BrandingServices.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

function BrandingServices() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="brandingServices">
            <div className="container">
                <div className="row">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Services</h2>
                        <p>Transform your business with our impact</p>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/service1.svg" alt="serviceImg" />
                            <h3>Brand identity</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/service2.svg" alt="serviceImg" />
                            <h3>Logo Design</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/service3.svg" alt="serviceImg" />
                            <h3>Printing Materials</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/service4.svg" alt="serviceImg" />
                            <h3>Brand Launch</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/service5.svg" alt="serviceImg" />
                            <h3>Social Media</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/service6.svg" alt="serviceImg" />
                            <h3>Digital Marketing</h3>
                        </div>
                    </div>
                </div>
                <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
               <Link to="/" className="btn-custom">View All</Link>
               </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default BrandingServices
