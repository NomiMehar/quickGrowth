import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import MobileAppBanner from './MobileAppBanner/MobileAppBanner'
import LeadingCompany from './LeadingCompany/LeadingCompany'
import QuickFacts from '../../../AboutUs/Achievements/Achievements'
import MobileServices from './MobileServices/MobileServices'
import BusinessSolutions from './BusinessSolutions/BusinessSolutions'
import TechStack from './TechStack/TechStack'
import AppRecentProjects from './AppRecentProjects/AppRecentProjects'
import Faq from '../../../Portfolio/Faqs/Faqs'

const MobileApplications = () => {
  return (
    <React.Fragment>
      <Header />
      <MobileAppBanner />
      <LeadingCompany />
      <QuickFacts />
      <MobileServices />
      <BusinessSolutions />
      <TechStack head2="Technology Stack We Use for" spanText="SaaS Solution Development"/>
      <AppRecentProjects />
      <Faq />
      <Footer />
    </React.Fragment>
  )
}

export default MobileApplications