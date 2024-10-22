import React, { useEffect } from 'react'
import AOS from 'aos';
import './quickfacts.scss'
import { Link } from 'react-router-dom';

const QuickFacts = () => {
    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <React.Fragment>
        <section className='strategic'>
            <div className='container'>
                <div className='content'  data-aos="fade-up" data-aos-duration="1000">
                    <h2>How Strategic Search Engine Marketing
                        <br />
                    <span>Can Boost Your Revenue</span></h2>
                    <p>Simply put, our SEM services help you dominate search results, connect with your Canadian audience, and boost your bottom line. We believe in delivering measurable results and are passionate about helping businesses across Canada grow through optimized SEM campaigns that elevate your brand to the top of both organic and paid search results. On average, our clients see a significant return on their investment. With our advanced marketing technology, we continuously enhance your results by driving actionable insights, ensuring full-funnel attribution, and delivering high-quality conversions.</p>
                    
                    <div className="btn-center mt-5"  data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/" className="btn-custom">Talk to Our Expert</Link>
                    </div>    
                </div>
            </div>
        </section>
        
    </React.Fragment>
  )
}

export default QuickFacts