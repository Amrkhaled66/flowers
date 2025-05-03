import L from "leaflet";

const UAE_BOUNDS = L.latLngBounds(
  [22.5, 51.4], // Southwest
  [26.5, 56.5], // Northeast
);

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


export { UAE_BOUNDS, greenIcon };