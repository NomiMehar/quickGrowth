import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import Faq from '../../../Portfolio/Faqs/Faqs'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import MvpSolutions from './MvpBanner/MvpBanner'
import ProductDev from './ProductDev/ProductDev'
import MvpServices from './MvpServices/MvpServices'
import MvpBenefits from './MvpBenefits/MvpBenefits'
import TechStackMVP from '../WebApplications/ToolsTech/ToolsTech'
import MvpRecentWork from './MvpRecentWork/MvpRecentWork'
import MvpDevProcess from './MvpDevProcess/MvpDevProcess'

const Index = () => {
  return (
    <React.Fragment>
        <Header />
        <MvpSolutions />
        <ProductDev />
        <Achievements />
        <MvpServices />
        <MvpBenefits />
        <TechStackMVP />
        <MvpRecentWork />
        <MvpDevProcess />
        <Faq />
        <Footer />
    </React.Fragment>
  )
}

export default Index