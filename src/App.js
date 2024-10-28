import React, { lazy, Suspense,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactUs from "./components/ContactUs/ContactUs";
import WebsiteDesignDevelopment from "./components/Services/Web/website-design-development/Index";
import EcommerceDevelopment from "./components/Services/Web/ecommerce-development/Index";
import WebMaintenance from "./components/Services/Web/website-maintenance/Index";
import Copywriting from "./components/Services/Web/copywriting/Index";
import BrandingAgency from "./components/Services/Branding/Index";
import Hoisting from "./components/Services/Hoisting/Index";
import SEO from './components/Services/DigitalMarketing/seo/Index';
import SMM from './components/Services/DigitalMarketing/smm/Index';
import MobileApplications from "./components/Services/Software/MobileApplications/Index";
import WebApplications from "./components/Services/Software/WebApplications/Index";
import SaasSolutions from "./components/Services/Software/SaasSolutions/Index";
import MvpSolutions from "./components/Services/Software/MvpSolutions/Index";
import AiChatbots from "./components/Services/Artificial-Intelligence/AI-Chatbots/Index";
import SaasAiSolution from "./components/Services/Artificial-Intelligence/SaasAi/Index";
import AiPocAiMvp from "./components/Services/Artificial-Intelligence/Ai-poc-Ai-mvp/Index";
import Faqs from './components/Faqs/Index';

const Home = lazy(() => import("./components/home/Home"));
const Config = () => {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/faqs" element={<Faqs />}></Route>
          <Route path="/services/web/website-design-development" element={<WebsiteDesignDevelopment />}></Route>
          <Route path="/services/web/ecommerce-development" element={<EcommerceDevelopment />}></Route>
          <Route path="/services/web/website-maintenance" element={<WebMaintenance />}></Route>
          <Route path="/services/web/copywriting" element={<Copywriting />}></Route>
          <Route path="/services/branding" element={<BrandingAgency />}></Route>
          <Route path="/services/hosting" element={<Hoisting />}></Route>
          <Route path="/services/digital-marketing" element={<SEO />}></Route>
          <Route path="/services/digital-marketing/smm" element={<SMM />}></Route>
          <Route path="/services/software" element={<MobileApplications />}></Route>
          <Route path="/services/software/web-applications" element={<WebApplications />}></Route>
          <Route path="/services/software/saas-solution" element={<SaasSolutions />}></Route>
          <Route path="/services/software/mvp-solution" element={<MvpSolutions />}></Route>
          <Route path="/services/artificial-intelligence" element={<AiChatbots />}></Route>
          <Route path="/services/artificial-intelligence/saas-ai-solution" element={<SaasAiSolution />}></Route>
          <Route path="/services/artificial-intelligence/ai-poc-ai-mvp" element={<AiPocAiMvp />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Config;
