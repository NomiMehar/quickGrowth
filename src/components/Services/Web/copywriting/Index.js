import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import CopywritingBanner from './CopywritingBanner/CopywritingBanner'
import BestCopywriters from './BestCopywriters/BestCopywriters'
import CopywritingServices from './CopywritingServices/CopywritingServices'
import CopywritingProject from './CopywritingProject/CopywritingProject'
import Faqs from '../../../Portfolio/Faqs/Faqs'
function Index() {
  return (
    <React.Fragment>
      <Header />
      <CopywritingBanner />
      <BestCopywriters />
      <CopywritingServices />
      <CopywritingProject />
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
