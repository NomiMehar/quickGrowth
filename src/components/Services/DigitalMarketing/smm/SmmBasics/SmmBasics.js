import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const SmmBasics = () => {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <section className='strategic'>
            <div className='container'>
                <div className='content'  data-aos="fade-up" data-aos-duration="1000">
                    <h2>Social Media Marketing Marketing <span> Basics</span></h2>
                    <p>Social media is a vital source of news and information in today's digital world, playing a key role in search rankings and digital marketing. With 4.57 billion users globally, including 346 million who joined in 2020, its reach is immense. Users spend an average of two hours and 24 minutes daily across multiple platforms, highlighting the importance of maintaining a strong social media presence.</p>
                    
                    <div className="btn-center mt-5"  data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/" className="btn-custom">Talk to Our Expert</Link>
                    </div>    
                </div>
            </div>
        </section>
  )
}

export default SmmBasics