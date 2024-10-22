import React, { useEffect } from 'react'
import './AboutEcommerce.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

function AboutEcommerce() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="aboutEcommerce">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>Responsive, Tailored, and Scalable eCommerce <span>Website Design Services</span></h2>
                    <span className='subHeading'>Work With Quick Growth Leading eCommerce Development Agency</span>
                    <p data-aos="fade-up" data-aos-duration="1000">A successful eCommerce website design in Calgary needs to offer top-notch user experience, has all the features for users to easily navigate and find the product features that will aid the user’s decision to purchase. However, an online store with slow speed, confusing user interface, or missing crucial features will result in lost sales. So, whether you are building a brand-new online store or looking to make changes or upgrades, our team has a solution that can fulfill your business needs.</p>
                </div>
                <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
               <Link to="/" className="btn-custom">Get Started</Link>
               </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default AboutEcommerce
