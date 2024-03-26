import React from "react";
import HeroSectionCard from "./HeroSectionCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSection = () => {
  const homeData = [
    {
      heading: "Explore the sights of the Andaman and Nicobar Islands",
      subheading: "The place called heaven on earth",
      src: "https://images.unsplash.com/photo-1620127682229-33388276e540",
    },
    {
      heading: "Discover the beauty of Paris",
      subheading: "City of Love",
      src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      heading: "Experience the wonders of New York City",
      subheading: "The city that never sleeps",
      src: "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c",
    },
    {
      heading: "Marvel at the grandeur of the Grand Canyon",
      subheading: "Nature's masterpiece",
      src: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c",
    },
    {
      heading: "Get lost in the charm of Kyoto",
      subheading: "Tradition meets modernity",
      src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
    },
  ];

  return (
    <section className="max-w-[1800px] mx-auto w-full h-[90vh]  mt-6 rounded-[25px] overflow-hidden relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {homeData.map((data, index) => (
          <SwiperSlide key={index} className="h-[90vh]">
            <HeroSectionCard
              heading={data.heading}
              subheading={data.subheading}
              src={data.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <HeroSectionCard /> */}
    </section>
  );
};

export default HeroSection;
