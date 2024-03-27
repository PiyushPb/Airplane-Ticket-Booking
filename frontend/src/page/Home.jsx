import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Home/HeroSection";
import TopPlaces from "../components/Home/TopPlaces";
import ValuesWeProvide from "../components/Home/ValuesWeProvide";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <section className="px-[30px] md:px-[30px]">
      <Navbar />
      <HeroSection />
      <ValuesWeProvide />
      <TopPlaces />
      <Testimonials />
    </section>
  );
};

export default Home;
