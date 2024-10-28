import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import ChatbotBanner from './ChatbotBanner/ChatbotBanner'
import ChatbotDev from './ChatbotDev/ChatbotDev'
import Faq from '../../../Portfolio/Faqs/Faqs'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import ChatbotBenefits from './ChatbotBenefits/ChatbotBenefits'
import ChatbotServices from './ChatbotServices/ChatbotServices'
import CrossPlatform from './CrossPlatform/CrossPlatform'
import ChatbotIntegration from './ChatbotIntegration/ChatbotIntegration'
import AiToolsTech from './AiToolsTech/AiToolsTech'
import CaseStudies from './CaseStudies/CaseStudies'
import OurProcess from '../../../home/OurProcess/OurProcess'

function Index() {
  return (
    <React.Fragment>
        <Header />
        <ChatbotBanner />
        <ChatbotDev />
        <Achievements />
        <ChatbotBenefits />
        <ChatbotServices />
        <CrossPlatform />
        <ChatbotIntegration />
        <AiToolsTech />
        <CaseStudies />
        <OurProcess />
        <Faq />
        <Footer />
    </React.Fragment>
  )
}

export default Index