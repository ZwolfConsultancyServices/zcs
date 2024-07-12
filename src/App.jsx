import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ZwolfHeader from "./components/ZwolfHeader";

import ScrollToTop from "./components/ScrollToTop";
import Techwww from "./components/Techwww";
import Category from "./components/Category";
import About from "./pages/About";
import Services from "./pages/Services";
import Howwework from "./pages/Howwework";
import OurClient from "./pages/OurClient";
import Review from "./pages/Review";
import AboutFounder from "./pages/AboutFounder";
import ServiceDetail from "./pages/ServiceDetails";
import Privacy from "./pages/Privacy";
import Termandcondition from "./pages/TnC";
import RefundPolicy from "./pages/RefundPolicy";
import Zwolfooter from "./components/ZwolfFooter";
import ContactUs from "./pages/ContactUs";
import Zcarousel from "./pages/Zcarousel";
import TechnologiesWeUse from "./pages/TechnologiesWeUse";
import MeetClient from "./pages/MeetOurExperinece";
import Floatingbtn from "./components/FloatinBtn";
import WhyCUs from "./pages/WhyCUs";



function App() {
  const [currentCategory, setCurrentCategory] = useState('frontend');
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <ZwolfHeader/>
        <ScrollToTop />
        <div className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Zcarousel/>
                  <TechnologiesWeUse/>
                  <Techwww setCurrentCategory={setCurrentCategory} />
                  <Category category={currentCategory} />
                  <About />
                  <Services />
                  <Howwework />
                  {/* <MeetClient/> */}
                  <WhyCUs/>
                  <OurClient />
                  <Review />
                  <AboutFounder />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services className="bg-dark" />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/how-we-work" element={<Howwework />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/our-client" element={<OurClient />} />
            {/* <Route path="/meet-client" element={<MeetClient />} /> */}
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<Termandcondition />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Routes>
        </div>
        <Floatingbtn/>
        <Zwolfooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
