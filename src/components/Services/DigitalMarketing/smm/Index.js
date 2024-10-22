import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SmmBanner from './SmmBanner/SmmBanner'
import SmmBasics from './SmmBasics/SmmBasics'
import SmmBenefits from './SmmBenefits/SmmBenefits'
import SmmWcu from './SmmWCU/SmmWcu'

const Index = () => {
  return (
    <React.Fragment>
        <Header />
        <SmmBanner />
        <SmmBasics />
        <SmmBenefits />
        <SmmWcu />
        <Footer />
    </React.Fragment>
  )
}

export default Index