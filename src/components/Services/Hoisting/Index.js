import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import HoistingBanner from './HoistingBanner/HoistingBanner'
import HostingDomain from './HostingDomain/HostingDomain'
import HoistingServices from './HoistingServices/HoistingServices'
import HostingWorks from './HostingWorks/HostingWorks'
import HostingMind from './HostingMind/HostingMind'
import Faqs from '../../Portfolio/Faqs/Faqs'

function Index() {
  return (
    <React.Fragment>
      <Header />
      <HoistingBanner />
      <HostingDomain />
      <HoistingServices />
      <HostingWorks />
      <HostingMind />
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
