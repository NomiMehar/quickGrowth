import React, { useEffect } from 'react'
import AOS from 'aos';

const WebDevelopment = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className='strategic'>
            <div className='container'>
                <div className='content' data-aos="fade-up" data-aos-duration="1000">
                    <h2>Web Application  <span> Development</span></h2>
                    <p>Bring your web design ideas to life with our innovative solutions powered by the latest technologies. We create custom web applications tailored to lead generation and value creation, ensuring a high return on investment. Understanding the impact of a user-friendly, fully functional web app—and the damage an underperforming one can cause—we help Canadian businesses overcome technical challenges and build top-tier web solutions aligned with their marketing goals.</p>
                </div>
            </div>
        </section>
    )
}

export default WebDevelopment