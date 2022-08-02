import React, {useEffect} from "react";
import aceitunas from "../../images/aceituna.jpg";
import fabrica from "../../images/fabrica.jpg";
import pepinos from "../../images/pepinos.jpg";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Aos from "aos";

import "./Slider.css";

export const Slider = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="slider">
      <div className="slider-container" data-aos="fade-right">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={aceitunas} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pepinos} alt="slide3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={fabrica} alt="slide2" />
          </SwiperSlide>
        </Swiper>
        <div className="slider-texto">
          <div className="slider-text-container">
            <h1>Nuestra empresa</h1>
            <p>
              A través de 20 años de historia, siguiendo una línea de renovación
              y mejora constante, en HorVinDul S.R.L., apuntamos a la producción
              de encurtidos de alta calidad que elaboramos en instalaciones de
              última generación sin quitar la esencia de lo artesanal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
