// NPM Packages
import React from "react";
import PropTypes from "prop-types";

// Project files
import { icon } from "leaflet";
import { Map as LeafletMap, Marker, TileLayer } from "react-leaflet";
import mapPin from "../assets/images/map-pin.png";

export default function Map({ longitude, latitude }) {
  // Constants
  const zoomLevel = 15;
  const position = [latitude, longitude];
  const mapURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution =
    '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const myIcon = icon({
    iconUrl: mapPin,
    iconSize: [36, 36],
  });

  return (
    <LeafletMap className="map" center={position} zoom={zoomLevel}>
      <TileLayer url={mapURL} attribution={attribution} />
      <Marker position={position} icon={myIcon} />
    </LeafletMap>
  );
}

Map.propTypes = {
  longitude: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
};
