import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import img1 from "../../assets/HeroImg/amy_thompson.jpg";
import img2 from "../../assets/HeroImg/pStore.jpg";
import img3 from "../../assets/HeroImg/VC_Plant-Stores.jpg";

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
  ];

  return (
    <section className="hero-container w-full h-125 md:h-150 relative">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img src={slide.image} alt={slide.title} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
