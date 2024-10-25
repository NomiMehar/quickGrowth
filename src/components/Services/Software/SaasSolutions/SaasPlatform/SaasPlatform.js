import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom'

const SaasPlatform = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className='strategic'>
      <div className='container'>
        <div className='content' data-aos="fade-up" data-aos-duration="1000">
          <h2>SaaS Platform  <span> Development</span></h2>
          <p>Leverage the power of Software as a Service to elevate your business in Canada. Our comprehensive SaaS development services deliver tailored solutions designed to optimize user engagement, streamline workflows, and drive growth. With our expert team, we ensure your business stays agile and competitive using cutting-edge SaaS technologies customized to meet your unique needs and goals in the Canadian market.</p>
          <div className="btn-center mt-5" data-aos="fade-up" data-aos-duration="1000">
            <Link to="/contact-us" className="btn-custom">Talk to Our Expert</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SaasPlatform