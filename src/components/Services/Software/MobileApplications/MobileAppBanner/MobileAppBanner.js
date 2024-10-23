import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import './MobileAppBanner.scss'

const MobileAppBanner = () => {
  useEffect(() => {
    AOS.init();
  }, [])

return (
<React.Fragment>
     <div className="MobileAppBanner">
                <div className="container">
                    <div className="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>Mobile App Development</h2>
                            <p>Enhance your online presence and credibility with our dynamic application development solutions that scale.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadCrumbs">
                <div className="container">
                    <p data-aos="fade-left" data-aos-duration="1000">
                    <Link to="/" className='home'>Home</Link>
                    <span>/</span>
                    <Link to="/services/software" className='page'>Mobile App Development</Link>
                    </p>
                </div>
            </div>
</React.Fragment>
)
}

export default MobileAppBanner