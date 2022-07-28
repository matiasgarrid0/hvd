import React from "react";

export const MapContact = () => {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="map-google"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=-34.54732856384533,%20-58.57467868565344&t=&z=17&ie=UTF8&iwloc=&output=embed"
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
