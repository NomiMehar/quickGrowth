import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import './MvpBanner.scss'

const MvpSolutions = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <React.Fragment>
            <div className="MvpSolutions">
                <div className="container">
                    <div className="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>MVP Solution</h2>
                            <p>Quick Growth is here to assist you with MVP creation and development for your startup, turning your idea into reality and showcasing it to investors in Canada.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadCrumbs">
                <div className="container">
                    <p data-aos="fade-left" data-aos-duration="1000">
                        <Link to="/" className='home'>Home</Link>
                        <span>/</span>
                        <Link to="/services/software/mvp-solution" className='page'>MVP Solutions</Link>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MvpSolutions