import React from "react";
import TestimonialCard from "../Card/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kianna Curtis",
      role: "Passenger",
      image: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
      text: "I am very happy with the service. The staff is very helpful and friendly. I have been using this service for years and I am very satisfied with it.",
    },
    {
      name: "Derrick Harris",
      role: "Passenger",
      image: "https://i.pravatar.cc/300?u=a042581f4e29026705d",
      text: "I have been using this service for years and I am very satisfied with it. The staff is very helpful and friendly.",
    },
    {
      name: "Derrick Harris",
      role: "Passenger",
      image: "https://i.pravatar.cc/300?u=a042581f4e29026706d",
      text: "I have been using this service for years and I am very satisfied with it. The staff is very helpful and friendly.",
    },
  ];

  return (
    <div className="py-5 max-w-[1400px] mx-auto">
      <div>
        {/* TODO: ADD APP NAME HERE */}
        <h1 className="text-[18px]">This is why passengers love us</h1>
      </div>
      <div>
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                text={testimonial.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
