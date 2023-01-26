import { useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";

interface Prop {
  center: LatLngTuple;
}

const ChangeView = ({ center }: Prop) => {
  const map = useMap();
  map.setView(center);
  return null;
};

export default ChangeView;
