import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SaasSolBanner from './SaasSolBanner/SaasSolBanner'
import SaasPlatform from './SaasPlatform/SaasPlatform'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import SaasDevServices from './SaasDevServices/SaasDevServices'
import SaasIndustries from './SaasIndustries/SaasIndustries'
import TechStack from '../MobileApplications/TechStack/TechStack'
import SaasBenefits from './SaasBenefits/SaasBenefits'
import SaasRecent from './SaasRecent/SaasRecent'
import SaasDevProcess from './SaasDevProcess/SaasDevProcess'
import Faq from '../../../Portfolio/Faqs/Faqs'

const Index = () => {
  return (
    <React.Fragment>
        <Header />
        <SaasSolBanner />
        <SaasPlatform />
        <Achievements />
        <SaasDevServices />
        <SaasIndustries />
        <TechStack />
        <SaasBenefits />
        <SaasRecent />
        <SaasDevProcess />
        <Faq />
        <Footer />
    </React.Fragment>
  )
}

export default Index