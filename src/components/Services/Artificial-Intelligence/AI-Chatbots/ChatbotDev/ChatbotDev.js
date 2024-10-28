import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';
const ChatbotDev = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
    <section className='strategic'>
      <div className='container'>
        <div className='content' data-aos="fade-up" data-aos-duration="1000">
          <h2>Customized AI Chatbot <span> Development</span></h2>
          <p>Have you ever thought, "I wish we could respond to every customer within 30 seconds, creating personalized, valuable interactions"? Are you tired of your customers receiving generic, mediocre responses? Maybe your support team is overwhelmed by repetitive inquiries, leaving little time to address more complex conversations. If you want to deliver exceptional customer experiences and provide personalized, 24/7 support, this service is for you.</p>
          <div className="btn-center mt-5" data-aos="fade-up" data-aos-duration="1000">
            <Link to="/contact-us" className="btn-custom">Talk to Our Expert</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default ChatbotDev