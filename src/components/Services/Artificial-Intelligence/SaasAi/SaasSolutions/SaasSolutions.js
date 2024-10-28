import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';
const SaasSolutions = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
    <section className='strategic'>
      <div className='container'>
        <div className='content' data-aos="fade-up" data-aos-duration="1000">
          <h2>AI-Powered SaaS for Smarter  <span> Solutions</span></h2>
          <p>Our AI-powered SaaS solutions equip businesses with intelligent tools that streamline complex processes and boost efficiency. Whether you aim to enhance customer engagement or optimize operations, our platform delivers practical, reliable AI capabilities customized to meet your unique needs.</p>
          <div className="btn-center mt-5" data-aos="fade-up" data-aos-duration="1000">
            <Link to="/contact-us" className="btn-custom">Talk to Our Expert</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default SaasSolutions