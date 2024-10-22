import React, { useEffect } from 'react'
import './MakeDifferent.scss'
import AOS from 'aos';

function MakeDifferent() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="makeDifferent">
            <div className="container">
            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                <h2>What Makes us <span>Different</span></h2>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                    <div className="block">
                        <img src="/images/portfolio/make1.svg" alt="makeImg" />
                        <h3>Dedication</h3>
                        <p>A heartfelt dedication to honor and express gratitude for the people who inspire and support.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                    <div className="block">
                        <img src="/images/portfolio/make2.svg" alt="makeImg" />
                        <h3>Smart Work</h3>
                        <p>Efficiently achieving goals through strategic planning, innovation, and optimized effort.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                    <div className="block">
                        <img src="/images/portfolio/make3.svg" alt="makeImg" />
                        <h3>Collaboration</h3>
                        <p>Working together towards shared goals by combining strengths, ideas, & resources for greater success.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                    <div className="block">
                        <img src="/images/portfolio/make4.svg" alt="makeImg" />
                        <h3>Technology</h3>
                        <p>The application of scientific knowledge to create tools, systems, and solutions that enhance everyday life and drive innovation.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default MakeDifferent
