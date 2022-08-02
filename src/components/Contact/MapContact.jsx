import React from "react";

export const MapContact = () => {

    return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="map-google"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=-33.0311345436961,%20-68.51223213098359&t=&z=18&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="contact-map"
          ></iframe>
          <a className="a-map" href="https://fmovies-online.net">.</a>
        </div>
      </div>
    </div>
  );
};
