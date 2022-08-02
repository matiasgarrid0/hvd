import React, {useEffect} from "react";
import "./Pickles.css";
import Pickless from '../../../images/pickles.jpg'
import Aos from "aos";

export const Pickles = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-pickles" >
      <div className="bg-pickles">
        <p className="p-title-pickles">Pickles</p>
      </div>
      <div  className="container-elements-pickles" >
        <div className="container-titles-img" data-aos="fade-right">
           <div className="titles-product-pickles">
           <p className="title-pickles">Pickles mixtos en vinagre de alcohol</p>
           <p className="pres-pickles">Presentaciones:</p>
           <ul>
            <li>Frasco Vidrio x 220 grs</li>
            <li>Frasco Vidrio x 2000 grs</li>
            <li>Frascos Plasticos x 1000 grs</li>
            <li>Frasco Vidrio x 500 grs</li>
            <li>Frasco Plástico x 2000 grs</li>
            <li>Garrafa x 5000 grs</li>
           </ul>
           </div>
           <img className="pickles-image" src={Pickless} alt="" />
        </div>
      </div>
    </div>
  );
};
