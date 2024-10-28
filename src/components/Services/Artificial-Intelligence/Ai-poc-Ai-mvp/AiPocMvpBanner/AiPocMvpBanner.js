import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import './AiPocMvpBanner.scss'

const AiPocMvpBanner = () => {
  useEffect(() => {
    AOS.init();
  }, [])

return (
<React.Fragment>
            <div className="AiPocMvpBanner">
                <div className="container">
                    <div className="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>AI PoC & MVP</h2>
                            <p>Turn visionary AI concepts into real-world solutions with confidence, backed by strategic insights and expertise.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadCrumbs">
                <div className="container">
                    <p data-aos="fade-left" data-aos-duration="1000">
                    <Link to="/" className='home'>Home</Link>
                    <span>/</span>
                    <Link to="/services/artificial-intelligence/ai-poc-ai-mvp" className='page'>AI PoC & MVP</Link>
                    </p>
                </div>
            </div>
</React.Fragment>
)
}

export default AiPocMvpBanner