import React, { useEffect } from 'react'
import AOS from 'aos';
import './CopywritingBanner.scss'
import { Link } from 'react-router-dom'
function CopywritingBanner() {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
        <React.Fragment>
                <div className="copywritingBanner">
                    <div className="container">
                        <div className="row">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <h2>Copywriting services that work</h2>
                                <p>Spelling and grammar count, but they’re just the beginning. Your message needs to be clear and your words need to touch your audience.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadCrumbs">
            <div className="container">
                <p data-aos="fade-left" data-aos-duration="1000">
                <Link to="/" className='home'>Home</Link>
                <span>/</span>
                <Link to="/services/web/copywriting" className='page'>Copywriting</Link>
                </p>
            </div>
        </div>
        </React.Fragment>
    )
}

export default CopywritingBanner
