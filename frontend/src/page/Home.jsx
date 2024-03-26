import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Home/HeroSection";
import TopPlaces from "../components/Home/TopPlaces";

const Home = () => {
  return (
    <section className="px-[30px] md:px-[30px]">
      <Navbar />
      <HeroSection />
      {/* <TopPlaces /> */}
    </section>
  );
};

export default Home;
