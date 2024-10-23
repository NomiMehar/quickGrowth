import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SmmBanner from './SmmBanner/SmmBanner'
import SmmBasics from './SmmBasics/SmmBasics'
import SmmBenefits from './SmmBenefits/SmmBenefits'
import SmmWcu from './SmmWCU/SmmWcu'
import SmmPlatforms from './SmmPlatforms/SmmPlatforms'
import HowToMarket from './How-to-Market/HowToMarket'
import AwesomeProjects from './AwesomeProjects/AwesomeProjects'
import FAQ from '../../../Portfolio/Faqs/Faqs'

const Index = () => {
  return (
    <React.Fragment>
        <Header />
        <SmmBanner />
        <SmmBasics />
        <SmmBenefits />
        <SmmWcu />
        <HowToMarket />
        <AwesomeProjects />
        <SmmPlatforms />
        <FAQ />
        <Footer />
    </React.Fragment>
  )
}

export default Index