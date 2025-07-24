import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// images import
import img1 from "../../../images/trend-card.webp";
import img2 from "../../../images/trend-card2.webp";
import img3 from "../../../images/trend-card3.webp";
import img4 from "../../../images/trend-card4.webp";
import img5 from "../../../images/trend-card5.webp";
import img6 from "../../../images/trend-card6.webp";
import img7 from "../../../images/trend-card7.webp";
import img8 from "../../../images/trend-card8.webp";
import img9 from "../../../images/trend-card9.webp";
import img10 from "../../../images/trend-card10.webp";

const Card = () => {
  const imageCard = [
    { src: img1, alt: "Photo 1" },
    { src: img2, alt: "Photo 2" },
    { src: img3, alt: "Photo 3" },
    { src: img4, alt: "Photo 4" },
    { src: img5, alt: "Photo 5" },
    { src: img6, alt: "Photo 6" },
    { src: img7, alt: "Photo 7" },
    { src: img8, alt: "Photo 8" },
    { src: img9, alt: "Photo 9" },
    { src: img10, alt: "Photo 10" },
  ];
  return (
    <section className="pt-30 bg-black">
      <div className="container m-auto">
        <h2 className="text-3xl text-white font-bold mx-20">Trending Now</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4.2}
          navigation
          loop
        >
          <div className="row flex gap-1">
            {imageCard.map((image, index) => (
              <SwiperSlide key={index} className="w-full mt-10">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-48 h-auto object-cover rounded"
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Card;
