import React from 'react'
import Header from '../../../Header/Header'
import AiPocMvpBanner from './AiPocMvpBanner/AiPocMvpBanner'
import AiSuccess from './AiSuccess/AiSuccess'
import ProjectSuccees from './ProjectSuccees/ProjectSuccees'
import AiRoadMap from './AiRoadMap/AiRoadMap'
import BussinessExpansion from './BussinessExpansion/BussinessExpansion'
import WebRecent from '../../Software/WebApplications/WebRecentWork/WebRecentWork'
import Faq from '../../../Portfolio/Faqs/Faqs'
import Footer from '../../../Footer/Footer'
function Index() {
  return (
    <React.Fragment>
        <Header />
        <AiPocMvpBanner />
        <AiSuccess />
        <ProjectSuccees />
        <AiRoadMap />
        <BussinessExpansion />
        <WebRecent />
        <Faq />
        <Footer />
    </React.Fragment>
  )
}

export default Index