import React from "react";
import aceitunas from '../../images/aceituna.jpg';
import fabrica from '../../images/fabrica.jpg';
import pepinos from '../../images/pepinos.jpg';
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './Slider.css'

export const Slider = () => {
    return (
        <div className="slider">
            <div className="slider-container">
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    // navigation={true}
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
                            Nuestra historia comienza en 1984. Comenzamos como
                            una empresa familiar dedicada a la elaboración de
                            pickles y aceitunas, con el fin de proveer a grandes
                            marcas del país. Con el paso del tiempo logramos
                            diversificar nuestros productos y expandir nuestros
                            puntos de venta a distintas provincias de Argentina,
                            iniciando un nuevo camino hacia la comercialización
                            de los productos fraccionados con nuestra marca.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}