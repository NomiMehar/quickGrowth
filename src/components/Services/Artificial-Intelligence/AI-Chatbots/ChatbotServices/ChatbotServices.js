import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';
function ChatbotServices() {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/chatbot-service-1.svg",
            "title": "Custom Chatbot",
          "description": "At Quick Growth, we specialize in creating tailored chatbot solutions designed to meet the unique needs of your business. Our custom chatbots can engage customers, streamline operations, and enhance user experiences across various platforms."
        },
        {
          "imageSrc": "/images/services/chatbot-service-3.svg",
            "title": "Use Case Chatbot Development",
          "description": "Our chatbot development services automate customer interactions, handling inquiries and bookings 24/7. Seamlessly integrated with your systems, they enhance efficiency and elevate customer satisfaction."
        },
        {
          "imageSrc": "/images/services/chatbot-service-2.svg",
            "title": "AI Model Integration",
          "description": "Our AI model integration service seamlessly incorporates advanced AI solutions into your existing systems, enhancing decision-making and automating processes. Tailored to your needs, we ensure improved efficiency and a competitive edge in your industry."
        },
        {
          "imageSrc": "/images/services/chatbot-service-4.svg",
            "title": "AI Chatbot Development Solutions",
          "description": "We provide comprehensive AI development services in Canada, covering design, development, integration, and support. Our intelligent virtual assistants engage users in meaningful conversations around the clock."
        },
        {
          "imageSrc": "/images/services/wcu-smm-5.svg",
            "title": "Multi-language Chatbot Development",
          "description": "We can create multilingual chatbots that communicate effortlessly in various languages. Our localized support enhances customer satisfaction across Canada's diverse markets."
        },
        {
          "imageSrc": "/images/services/wcu-smm-6.svg",
            "title": "Chatbot Maintenance and Support",
          "description": "After deployment, we ensure that chatbots operate at peak performance in Canada through regular updates, upgrades, and issue resolution support. Our dedicated engineers monitor and troubleshoot to enhance performance continuously."
        }
      ]
      
    return (
        <React.Fragment>
            <div className="copywritingServices">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Tailored AI Chatbot Development Services
                        Provided by  <span>Quick Growth</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                            {slideData.map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="copywritingServices__card">
                                        <img src={item.imageSrc} alt="Ecommerce Features" />
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/contact-us" className="btn-custom">LET'S TALK</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ChatbotServices
