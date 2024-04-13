import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Service from "../../Components/Service/Service";
import Appstore from "../../Components/AppStore/Appstore";
import Testimonial from "../../Components/Testimonial/Testimonial";

function Home() {
  return (
    <>
      <HeroSection />
      <Service/>
      <Appstore/>
      <Testimonial/>
    </>
  );
}

export default Home;
