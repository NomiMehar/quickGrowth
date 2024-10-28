import React, { useEffect } from 'react'
import AOS from 'aos';

const ChatbotBenefits = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/chatbot-benefit-2.svg",
            "title": "Cost Savings",
          "description": "Our AI chatbots function as virtual assistants, automating repetitive tasks that typically need human involvement. This automation leads to substantial cost savings, as chatbots don’t require salaries or benefits."
        },
        {
          "imageSrc": "/images/services/chatbot-benefit-3.svg",
            "title": "Increased Efficiency",
          "description": "Chatbots offer round-the-clock support, managing common queries and swiftly resolving issues. This efficient response minimizes customer wait times, boosts customer satisfaction, and allows human agents to concentrate on more complex tasks."
        },
        {
          "imageSrc": "/images/services/smm-2.svg",
            "title": "Data-Driven Insights",
          "description": "Chatbots gather valuable customer data, offering insights into preferences, needs, and behaviors. This information enables businesses to make informed decisions, tailor customer experiences, and enhance marketing strategies."
        },
        {
          "imageSrc": "/images/services/smm-4.svg",
            "title": "Competitive Advantage",
          "description": "Integrating chatbots showcases a commitment to innovation and a customer-centric approach. This dedication distinguishes your business from competitors, drawing in new customers and nurturing brand loyalty."
        },
        {
          "imageSrc": "/images/services/smm-3.svg",
            "title": "Enhanced User Engagement",
          "description": "Chatbots facilitate engaging interactions that capture users' attention and prolong their time on your website or messaging platform. This level of engagement strengthens customer relationships and boosts conversion rates."
        },
        {
          "imageSrc": "/images/services/chatbot-benefit-1.svg",
            "title": "Scalability and Adaptability",
          "description": "Quick Growth develops scalable AI chatbots that can adapt to your business's growth. These chatbots ensure seamless integration with emerging technologies, keeping your business at the cutting edge of innovation."
        }
      ]
  return (
    <div className="seoServices">
    <div className="container">
        <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>How Does Quick Growth, a Leading AI Chatbot
            Company,   <span> Benefit Your Business?</span></h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
            <div className="row">

                {slideData.map((item, index) => (
                    <div className="col-lg-4 col-sm-6" key={index}>
                        <div className="seoServices__card">
                            <img src={item.imageSrc} alt="Ecommerce Features" />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}

            </div>
           
            </div>
        </div>
    </div>
  )
}

export default ChatbotBenefits