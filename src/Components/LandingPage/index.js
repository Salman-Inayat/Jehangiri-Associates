import React from 'react';
// import './App.css';
import LandingCarousel from './components/Carousel'
import ContactFromHome from './components/ContactForHome'
import AboutUs from './components/AboutUs'
import SearchProperty from './components/SearchForProperty'
import OurServices from './components/OurServices'
import HomeForSale from './components/HomeForSale'
import HomeForRent from './components/HomeForRent'
import WhyUs from './components/WhyUs'
import Testimonial from './components/Testimonial'
import ContactUs from './components/ContactUs'

function LandingPage() {
  return (
    <div className="App">
      <LandingCarousel/>
      <ContactFromHome/>
      <AboutUs/>
      {/* <SearchProperty/> */}
      <OurServices/>
      <HomeForSale/>
      <HomeForRent/>
      <WhyUs/>
      <Testimonial/>
      <ContactUs/>
    </div>
  );
}

export default LandingPage;