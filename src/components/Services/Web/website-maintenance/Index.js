import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import WebsiteMaintenanceBanner from './WebMaintenanceBanner/WebMaintenanceBanner'
import MaintenanceServices from './MaintenanceServices/MaintenanceServices'
import NeedMaintenance from './NeedMaintenance/NeedMaintenance'
import EcommerceDevelopmentFeatures from './EcommerceDevelopmentFeatures/EcommerceDevelopmentFeatures'
import MaintenancePackages from './MaintenancePackages/MaintenancePackages'
import MaintenanceProcess from './MaintenanceProcess/MaintenanceProcess'
import WhyQuickGrowth from '../../../home/WhyQuickGrowth/WhyQuickGrowth'
import Faqs from '../../../Portfolio/Faqs/Faqs'
function Index() {
  return (
    <React.Fragment>
      <Header />
      <WebsiteMaintenanceBanner />
      <MaintenanceServices />
      <NeedMaintenance />
      <EcommerceDevelopmentFeatures />
      <MaintenancePackages />
      <MaintenanceProcess />
      <WhyQuickGrowth />
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
