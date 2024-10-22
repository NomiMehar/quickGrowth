import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import EcommerceBanner from './EcommerceBanner/EcommerceBanner'
import AboutEcommerce from './AboutEcommerce/AboutEcommerce'
import RetailReach from './RetailReach/RetailReach'
import EcommerceFeatures from './EcommerceFeatures/EcommerceFeatures'
import ChooseUs from './ChooseUs/ChooseUs'
import EcommerceDevices from './EcommerceDevices/EcommerceDevices'
import Schedule from './Schedule/Schedule'
import EcommercePlatforms from './EcommercePlatforms/EcommercePlatforms'
import EcommerceWork from './EcommerceWork/EcommerceWork'
import RequestQuote from '../../../home/RequestQuote/RequestQuote'
import Faqs from '../../../Portfolio/Faqs/Faqs'
function Index() {
  return (
    <React.Fragment>
      <Header />
      <EcommerceBanner />
      <AboutEcommerce />
      <RetailReach />
      <EcommerceFeatures />
      <ChooseUs />
      <EcommerceDevices />
      <Schedule />
      <EcommercePlatforms />
      <EcommerceWork />
      <RequestQuote />
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
