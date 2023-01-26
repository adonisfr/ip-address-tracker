import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import { useAppSelector } from "../../app/hooks";
import ChangeView from "./ChangeView";
import iconImg from "../../assets/icon-location.svg";

const ICON = icon({
  iconUrl: iconImg,
  iconSize: [46, 56],
});

const Map = (): JSX.Element => {
  const data = useAppSelector((state) => state.searchSlice.data);

  const lat = data?.location.lat;
  const lng = data?.location?.lng;

  if (!lat || !lng) {
    return <></>;
  }

  return (
    <section className="section-map">
      <MapContainer
        className="map-style-container"
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <ChangeView center={[lat, lng]} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={ICON}>
          <Popup>
            <span>{data?.ip}</span> <br />{" "}
            <span>{`${data?.location?.city}, ${data?.location?.region} ${data?.location?.postalCode}`}</span>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;
