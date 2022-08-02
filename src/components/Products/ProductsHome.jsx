import React, { useEffect } from "react";
import "./Products.css";
import Pickles from "../../images/pickles.jpg";
import Aos from "aos";

export const ProductsHome = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="st-div-products-home">
      <div className="products-home-container">
        <p data-aos="fade-up" className="p-title-products-home">
          Producimos gran variedad de productos de la mejor calidad
        </p>
        <p className="title-2nd-products-home">
          Conoce nuestros productos en todos sus tamaños
        </p>
        <div data-aos="fade-right" className="container-cards-products-home">
          <div className="card-products-home">
            <img className="img-products-home" src={Pickles} alt="pickles" />
            <button className="button-products-home">Pickles</button>
          </div>
          <div className="card-products-home">
            <img className="img-products-home" src={Pickles} alt="pickles" />
            <button data-aos="flip-up" className="button-products-home">
              Pickles
            </button>
          </div>
          <div className="card-products-home">
            <img className="img-products-home" src={Pickles} alt="pickles" />
            <button className="button-products-home">Pickles</button>
          </div>
        </div>
        <button className="button-products-home">Conocé todos nuestros productos</button>
      </div>
    </div>
  );
};
