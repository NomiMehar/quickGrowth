import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Banner from './Banner/Banner'
import AboutUs from './AboutUs/AboutUs'
import Services from './Services/Services'
import OurSkills from './OurSkills/OurSkills'
import WhyQuickGrowth from './WhyQuickGrowth/WhyQuickGrowth'
import RequestQuote from './RequestQuote/RequestQuote'
import OurProcess from './OurProcess/OurProcess'
import ClientSays from './ClientSays/ClientSays'
function Home() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <OurSkills />
      <OurProcess/>
      <WhyQuickGrowth />
      <ClientSays />
      <RequestQuote />
      <Footer />
    </React.Fragment>
  )
}

export default Home
