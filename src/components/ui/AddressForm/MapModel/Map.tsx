import { useState, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import useFullscreen from "src/hooks/ui/useFullscreen";
import useDebounce from "src/hooks/shared/useDebounce";

import MapSearchInput from "../../SearchInput";
import showAlert from "src/utils/showAlert";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
interface LatLng {
  lat: number;
  lng: number;
}
import { greenIcon, UAE_BOUNDS } from "src/helpers/mapHelpers";

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

const Map = ({
  address,
  setAddress,
}: {
  address: string;
  setAddress: (address: string) => void;
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<LatLng>({
    lat: 25.2048,
    lng: 55.2708,
  });
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isFullscreen, toggleFullscreen] = useFullscreen(mapRef);
  const [leafletMap, setLeaFletMap] = useState<L.Map | null>(null);
  const [query, setQuery] = useState<string>("");
  const fetchReverseGeocode = async (latlng: LatLng) => {
    const res = await fetch(
      `https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_LOCATIONIQ_API_KEY}&lat=${latlng.lat}&lon=${latlng.lng}&format=json&`,
    );
    const data = await res.json();
    setAddress(data.display_name);
    setQuery(data.display_name);
    setSuggestions([]);
  };

  const handleMapClick = (latlng: LatLng) => {
    if (!UAE_BOUNDS.contains(latlng)) {
      showAlert({
        title: "Error",
        text: "Please select a location inside the UAE",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }
    setPosition(latlng);
    fetchReverseGeocode(latlng);
  };

  const fetchSuggestions = async (q: string) => {
    const res = await fetch(
      `https://us1.locationiq.com/v1/search.php?key=${import.meta.env.VITE_LOCATIONIQ_API_KEY}&q=${q}&countrycodes=ae&format=json`,
    );
    const data = await res.json();
    setSuggestions(data);
  };

  const debouncedFetchSuggestions = useDebounce(fetchSuggestions, 500);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (q.length < 3) return;
    debouncedFetchSuggestions(q);
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

    if (leafletMap) {
      leafletMap.flyTo(newPos, leafletMap.getZoom(), {
        animate: true,
        duration: 1.5,
      });
    }
  };

  return (
    <div className={`mx-auto !w-full space-y-4 rounded-xl bg-white`}>
      <div className="relative">
        <div className={`animate ${!isFullscreen && "space-y-5"}`} ref={mapRef}>
          <div className="flex w-full gap-x-2 bg-white">
            <MapSearchInput
              isFullScreen={isFullscreen}
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button onClick={() => toggleFullscreen()}>
              <Icon
                icon="material-symbols:zoom-out-map-rounded"
                width="24"
                height="24"
              />
            </button>
          </div>
          {suggestions.length > 0 && (
            <ul className="absolute top-11 z-[10000] max-h-48 w-full overflow-y-auto rounded-2xl bg-white py-5 text-sm drop-shadow-xl">
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
          )}

          <MapContainer
            //@ts-ignore
            whenReady={(mapInstance) => {
              setLeaFletMap(mapInstance.target);
            }}
            key={`map-${isFullscreen}`}
            center={[position.lat, position.lng]}
            zoom={9}
            className={`${!isFullscreen && "rounded-xl"}`}
            style={{
              height: isFullscreen ? "100vh" : "342px",
              width: "100%",
            }}
            maxBounds={[
              [22.5, 51.4],
              [26.5, 56.5],
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
      </div>
    </div>
  );
};

export default Map;
