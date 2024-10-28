import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SaasAiBanner from './SaasAiBanner/SaasAiBanner'
import SaasSolutions from './SaasSolutions/SaasSolutions'
import SaasImportance from './SaasImportance/SaasImportance'
import CaseStudy from '../AI-Chatbots/CaseStudies/CaseStudies'
import WebMaintenanceProcess from './WebMaintenanceProcess/WebMaintenanceProcess'
import Faq from '../../../Portfolio/Faqs/Faqs'
function Index() {
  return (
    <React.Fragment>
        <Header />
        <SaasAiBanner />
        <SaasSolutions />
        <SaasImportance />
        <CaseStudy />
        <WebMaintenanceProcess />
        <Faq />
        <Footer />
    </React.Fragment>
  )
}

export default Index