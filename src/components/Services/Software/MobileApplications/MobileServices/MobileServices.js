import React, { useEffect } from 'react'
import './MobileServices.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const MobileServices = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/m-plat-1.svg",
            "title": "IOS APP",
          "description": "We know what it takes to create a great iPhone app since we've previously created over 100+ applications in various categories. Likewise, we understand what it takes to transform a simple app concept into a profitable mobile app."
        },
        {
          "imageSrc": "/images/services/m-plat-2.svg",
            "title": "Android APP",
          "description": "Our full-stack Android mobile app developers create mobile applications sponsored and published by Forbes, Business Insider, and other publications, using the most up-to-date technology and industry expertise."
        },
        {
          "imageSrc": "/images/services/m-plat-3.svg",
            "title": "Cross-Platform APP",
          "description": "We specialize in developing custom mobile app development using cross-platform mobile app solution services for Android and iOS devices. Using Flutter, and React Native, we develop custom mobile applications that work smoothly on various platforms."
        }
      ]
      
    return (
        <React.Fragment>
            <div className="MobileServices">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Mobile App Development  <span>Services</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                            {slideData.map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="plat-card">
                                        <div className='plat-head'>
                                            <h3>{item.title}</h3>
                                            <div className='plat-img-wrapper'>
                                                 <img src={item.imageSrc} alt="Platforms" />
                                            </div>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/" className="btn-custom">Let's Talk</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MobileServices