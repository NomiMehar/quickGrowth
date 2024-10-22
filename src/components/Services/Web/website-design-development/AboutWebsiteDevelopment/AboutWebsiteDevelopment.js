import React, { useEffect } from 'react'
import './AboutWebsiteDevelopment.scss'
import AOS from 'aos';

function AboutWebsiteDevelopment() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="aboutWebsiteDevelopment">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>Website Design & <span>Development</span></h2>
                    <p data-aos="fade-up" data-aos-duration="1000">Quick Growth Marketing is a Calgary website design company that specializes in custom website design and development, offering services across Canada. Our ability to understand your business model, target market and processes is what takes our clients’ websites from Internet placeholders to dynamic, fully functional marketing forces. We create intuitive, beautifully functional, custom web site designs that will effectively communicate your marketing message to your customer base. Our processes have been tried and tested over a span of 25+ years.</p>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default AboutWebsiteDevelopment
