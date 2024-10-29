import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom'
import './ChatbotBanner.scss'

const ChatbotBanner = () => {
  useEffect(() => {
    AOS.init();
  }, [])

return (
<React.Fragment>
            <div className="ChatbotBanner">
                <div className="container">
                    <div className="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>Custom Chatbot</h2>
                            <p>Build a custom Chatbot, embed it on your website and let it handle customer support, lead generation, engage with your users, and more.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadCrumbs">
                <div className="container">
                    <p data-aos="fade-left" data-aos-duration="1000">
                    <Link to="/" className='home'>Home</Link>
                    <span>/</span>
                    <Link to="/services/artificial-intelligence/ai-chatbots" className='page'>Custom Chatbot</Link>
                    </p>
                </div>
            </div>
</React.Fragment>
)
}

export default ChatbotBanner