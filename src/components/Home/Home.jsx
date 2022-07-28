import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="padding">
        <div className="banner-home">
          <div className="container-home">
            <div className="sq-withe-cont">
              <p className="text-home">
                Cuidamos la calidad en cada paso para llevar lo mejor a tu mesa
              </p>
              <button className="button-con-home">CONOCENOS</button>
            </div>
          </div>
        </div>
      </div>
      <div className="div-pep-home">
        <div className="pep-bg-black">
          <p className="nosotros-title-home">Sobre Nosotros</p>
          <p className="nosotros-pep-home">
            HorVinDul S.R.L. es una empresa que crece día a día gracias a su
            calidad de productos y fieles clientes, lo invitamos a degustarlos y
            así sumarse a los que confían en nuestra calidad y sabor.
          </p>
        </div>
      </div>
    </div>
  );
};
