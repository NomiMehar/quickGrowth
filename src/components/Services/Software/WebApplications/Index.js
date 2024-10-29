import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import WebAppBanner from './WebAppBanner/WebAppBanner'
import WebDevelopment from './WebDevelopment/WebDevelopment'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import CreateWebApps from './CreateWebApps/CreateWebApps'
import ToolsTech from './ToolsTech/ToolsTech'
import WebProcesses from './WebProcesses/WebProcesses'
import WebRecentWork from './WebRecentWork/WebRecentWork'
import Faq from '../../../Portfolio/Faqs/Faqs'

const Index = () => {
  return (
    <React.Fragment>
      <Header />
      <WebAppBanner />
      <WebDevelopment />
      <Achievements />
      <CreateWebApps />
      <ToolsTech />
      <WebProcesses />
      <WebRecentWork head2="Our Recent" spanText="Work" />
      <Faq />
      <Footer />
    </React.Fragment>
  )
}

export default Index