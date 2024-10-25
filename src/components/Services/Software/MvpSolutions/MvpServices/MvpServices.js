import React, { useEffect } from 'react'
import './MvpServices.scss'
import AOS from 'aos';

function MvpServices() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="MvpServices">
            <div className="container">
                <div className="row">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Tailored MVP Software Development <br/> <span> Services</span></h2>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/mvp-service-1.svg" alt="serviceImg" />
                            <h3>MVP Development</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/mvp-service-2.svg" alt="serviceImg" />
                            <h3>MVP Improvement</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/mvp-service-3.svg" alt="serviceImg" />
                            <h3>Market Analysis</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/mvp-service-4.svg" alt="serviceImg" />
                            <h3>MVP Consulting</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/mvp-service-5.svg" alt="serviceImg" />
                            <h3>MVP Prototyping</h3>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/mvp-service-6.svg" alt="serviceImg" />
                            <h3>Full-scale Product</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default MvpServices
