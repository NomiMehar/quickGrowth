import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';
const ProductDev = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
    <section className='strategic'>
      <div className='container'>
        <div className='content' data-aos="fade-up" data-aos-duration="1000">
          <h2>Minimum Viable Product <span> Development</span></h2>
          <p>A minimum viable product (MVP) is the first shippable version of your software, featuring only the essential functionalities needed to resonate with your target audience in Canada. The primary goal of MVP development is to gather valuable feedback from users and start generating returns early in the process. Once the MVP is launched, it can be gradually enhanced with new features until it evolves into a fully developed application.</p>
          <div className="btn-center mt-5" data-aos="fade-up" data-aos-duration="1000">
            <Link to="/contact-us" className="btn-custom">Talk to Our Expert</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default ProductDev