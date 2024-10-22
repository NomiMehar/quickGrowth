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
import BrandingAgency from "./components/Services/Branding/branding-agency/Index";
import Hoisting from "./components/Services/Hoisting/domain-registeration/Index";
import SEO from './components/Services/DigitalMarketing/seo/Index';
import SMM from './components/Services/DigitalMarketing/smm/Index';
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
          <Route path="/services/branding/branding-agency" element={<BrandingAgency />}></Route>
          <Route path="/services/hosting/domain-registeration" element={<Hoisting />}></Route>
          <Route path="/services/digital-marketing/seo" element={<SEO />}></Route>
          <Route path="/services/digital-marketing/smm" element={<SMM />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Config;
