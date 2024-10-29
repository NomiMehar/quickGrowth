import React, { useEffect } from 'react';
import AOS from 'aos';
import './SeoBanner.scss'
import { Link } from 'react-router-dom'

const SeoBanner = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <React.Fragment>
         <div className="SeoBanner">
                    <div className="container">
                        <div className="row">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <h2>Search Engine Optimization</h2>
                                <p>Search Engine Optimization (SEO) is the practice of optimizing websites and content to improve their visibility in search engine results, driving organic traffic and enhancing online presence.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadCrumbs">
                    <div className="container">
                        <p data-aos="fade-left" data-aos-duration="1000">
                        <Link to="/" className='home'>Home</Link>
                        <span>/</span>
                        <Link to="/services/digital-marketing/seo" className='page'>Search Engine Optimization</Link>
                        </p>
                    </div>
                </div>
    </React.Fragment>
  )
}

export default SeoBanner