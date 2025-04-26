import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
interface LatLng {
  lat: number;
  lng: number;
}

const MapClickHandler: React.FC<{
  onClick: (latlng: LatLng) => void;
}> = ({ onClick }) => {
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    },
  });
  return null;
};

const Address: React.FC = () => {
  const [position, setPosition] = useState<LatLng>({
    lat: 25.2048,
    lng: 55.2708,
  });

  const [address, setAddress] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

 
  // navigator.geolocation.getCurrentPosition((pos) => {
  //   const { latitude, longitude } = pos.coords;
  //   setPosition({ lat: latitude, lng: longitude });
  // });

  const fetchReverseGeocode = async (latlng: LatLng) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`,
    );
    const data = await res.json();
    setAddress(data.display_name);
  };


  const handleMapClick = (latlng: LatLng) => {
    if (!UAE_BOUNDS.contains(latlng)) {
      alert("Please select a location inside the UAE.");
      return;
    }
    setPosition(latlng);
    fetchReverseGeocode(latlng);
  };

  const handleSearch = async (q: string) => {
    setQuery(q);
    if (q.length < 3) return;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${q}&format=json&countrycodes=ae`,
    );
    const data = await res.json();
    setSuggestions(data);
  };

  const handleSelectSuggestion = (
    lat: number,
    lon: number,
    display_name: string,
  ) => {
    const newPos = { lat, lng: lon };
    setPosition(newPos);
    setAddress(display_name);
    setQuery(display_name);
    setSuggestions([]);
  };

  return (
    <div className="mx-auto max-w-xl space-y-4 p-4">
      <input
        type="text"
        placeholder="Search address..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="mb-1 w-full border p-2"
      />
      <ul className="max-h-48 overflow-y-auto rounded border bg-white text-sm">
        {suggestions.map((s) => (
          <li
            key={s.place_id}
            onClick={() =>
              handleSelectSuggestion(
                parseFloat(s.lat),
                parseFloat(s.lon),
                s.display_name,
              )
            }
            className="cursor-pointer p-2 hover:bg-gray-200"
          >
            {s.display_name}
          </li>
        ))}
      </ul>

      <div className="font-medium text-gray-800">
        Address: {address || "Click on the map"}
      </div>

      <MapContainer
        center={[position.lat, position.lng]}
        zoom={7}
        style={{ height: "400px", width: "100%" }}
        maxBounds={[
          [22.5, 51.4], // Southwest corner (near the border with Saudi Arabia)
          [26.5, 56.5], // Northeast corner (north of Ras Al Khaimah)
        ]}
        maxBoundsViscosity={1.0}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={greenIcon} position={position}>
          <Popup>{address || "Selected location"}</Popup>
        </Marker>
        <MapClickHandler onClick={handleMapClick} />
      </MapContainer>
    </div>
  );
};

export default Address;
