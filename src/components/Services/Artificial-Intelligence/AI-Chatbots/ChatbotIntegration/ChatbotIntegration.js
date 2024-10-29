import React, { useEffect } from 'react'
import './ChatbotIntegration.scss'
import AOS from 'aos';

const ChatbotIntegration = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
            title: 'AI Chatbot Engineering',
            imageSrc: '/images/services/chatbot-int-1.svg',
            description: 'We specialize in designing and developing advanced AI chatbots in Canada, utilizing machine learning, deep learning, and neural networks. Our AI chatbots automate tasks, boost engagement, and drive business growth for Canadian enterprises.'
        },
        {
            title: 'AI Voice Assistant Chatbots',
            imageSrc: '/images/services/chatbot-int-2.svg',
            description: 'Our Canadian virtual assistant services enable seamless, hands-free interactions with users through advanced speech recognition and machine learning.'
        },
        {
            title: 'Medical AI Chatbots',
            imageSrc: '/images/services/chatbot-int-3.svg',
            description: 'We create AI chatbots in Canada that provide personalized support for doctors and patients in clinical workflows and remote consultations. Our solutions enhance patient engagement, improve health outcomes, and reduce costs in healthcare.'
        },
        {
            title: 'Legal Chatbots',
            imageSrc: '/images/services/chatbot-int-4.svg',
            description: 'Our legal chatbots in Canada assist law firms and lawyers with client interactions, document review, legal research, and task automation. These chatbots enhance accessibility to legal services and improve efficiency for both clients and legal professionals.'
        },
        {
            title: 'Social Media Chatbot Program',
            imageSrc: '/images/services/chatbot-int-5.svg',
            description: 'Our legal chatbots in Canada streamline client interactions, document review, and legal research, improving efficiency and accessibility for law firms and their clients.'
        },
        {
            title: 'Vision-based Chatbots',
            imageSrc: '/images/services/chatbot-int-6.svg',
            description: 'We develop next-generation AI-powered chatbots in Canada that use computer vision to analyze visual inputs, offering context-aware interactions and personalized recommendations.'
        }
    ]
    return (
        <React.Fragment>
            <div className="ChatbotIntegration">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Cross-Platform  <span> Chatbot Integration</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row justify-content-center">
                            {slideData.map((item, index) => (
                                <div className="col-lg-4 col-md-6 mt-4" key={index}>
                                    <div className="chatBot-card">
                                        <img src={item.imageSrc} alt="SMM Platforms" />
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ChatbotIntegration