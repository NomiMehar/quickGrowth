import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SeoBanner from './SeoBanner/SeoBanner'
import QuickFacts from './QuickFacts/Quickfacts'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import Services from './Services/Services'
import Benefits from './benefits/Benefits'
import RecentWorks from './recentWorks/RecentWorks'
import Platform from './platforms/Platforms'
import WhyChoose from './why-quick-growth/WhyChoose'
import FAQ from '../../../Portfolio/Faqs/Faqs'

const Index = () => {
  return (
    <React.Fragment>

        <Header />
        <SeoBanner />
        <QuickFacts />
        <Achievements />
        <Services />
        <Benefits />
        <RecentWorks />
        <Platform />
        <WhyChoose />
        <FAQ />
        <Footer />

    </React.Fragment>
  )
}

export default Index