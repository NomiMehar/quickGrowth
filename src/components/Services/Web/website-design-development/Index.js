import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import WebDesignBanner from './WebDesignBanner/WebDesignBanner'
import AboutWebsiteDevelopment from './AboutWebsiteDevelopment/AboutWebsiteDevelopment'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import DesignedAndDeveloped from './DesignedAndDeveloped/DesignedAndDeveloped'
import WebsiteProcess from './WebsiteProcess/WebsiteProcess'
import WhyQuickGrowth from '../../../home/WhyQuickGrowth/WhyQuickGrowth'
import ClientSays from '../../../home/ClientSays/ClientSays'
import Technologies from '../../../Portfolio/Technologies/Technologies'
import Faqs from '../../../Portfolio/Faqs/Faqs'
import PainPoints from './PainPoints/PainPoints'
import BeforeAfter from './BeforeAfter/BeforeAfter'
function Index() {
  return (
    <React.Fragment>
      <Header />
      <WebDesignBanner />
      <AboutWebsiteDevelopment />
      <Achievements />
      <DesignedAndDeveloped />
      <PainPoints />
      <WebsiteProcess />
      <BeforeAfter />
      <div className="noBg">
      <WhyQuickGrowth />
      </div>
      <ClientSays/>
      <Technologies/>
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
