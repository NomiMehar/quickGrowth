import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import CopywritingBanner from '../../../CustomBanner/CustomBanner'
import BestCopywriters from './BestCopywriters/BestCopywriters'
import CopywritingProject from './CopywritingProject/CopywritingProject'
import Faqs from '../../../Portfolio/Faqs/Faqs'
import CopyWritingList from "../../../CustomFeatures/CopyWritingList.json"
import CustomFeatures from '../../../CustomFeatures/CustomFeatures'
function Index() {
  return (
    <React.Fragment>
      <Header />
      <CopywritingBanner classProps="copywritingBanner" title="Copywriting services that work" description={["Spelling and grammar count, but they’re just the beginning." , <br/>  , " Your message needs to be clear and your words need to touch your audience."]} breadCrumbLink="/services/web/copywriting" breadCrumbName="Copywriting" />
      <BestCopywriters />
      <CustomFeatures classProps="copyWritingServices" title={["Copy Writing ",<span>Services</span>]} dataList={CopyWritingList}/>
      <CopywritingProject />
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
