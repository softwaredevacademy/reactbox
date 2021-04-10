// NPM Packages
import { icon } from "leaflet";
import { Map as LeafletMap, Marker, TileLayer } from "react-leaflet";

// Project files
import mapPin from "../assets/images/map-pin.png";

export default function Map({ coordinates }) {
  // Constants
  const zoomLevel = 15;
  const mapURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution = `&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;
  const myIcon = icon({ iconUrl: mapPin, iconSize: [36, 36] });

  return (
    <LeafletMap className="map" center={coordinates} zoom={zoomLevel}>
      <TileLayer url={mapURL} attribution={attribution} />
      <Marker position={coordinates} icon={myIcon} />
    </LeafletMap>
  );
}
