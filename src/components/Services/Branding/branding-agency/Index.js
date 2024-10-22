import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import BrandingBanner from './BrandingBanner/BrandingBanner'
import CreativeBranding from './CreativeBranding/CreativeBranding'
import BrandingIdentity from './BrandingIdentity/BrandingIdentity'
import BrandingServices from './BrandingServices/BrandingServices'
import AwesomeProject from './AwesomeProject/AwesomeProject'
import BrandingStaff from './BrandingStaff/BrandingStaff'
import Faqs from '../../../Portfolio/Faqs/Faqs'
import BrandingWorks from './BrandingWorks/BrandingWorks'
function index() {
  return (
    <React.Fragment>
      <Header />
      <BrandingBanner />
      <CreativeBranding />
      <BrandingIdentity />
      <BrandingServices />
      <AwesomeProject />
      <BrandingWorks />
      <BrandingStaff />
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default index
