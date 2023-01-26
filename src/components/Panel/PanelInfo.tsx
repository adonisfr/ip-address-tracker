import Info from "./Info";
import { useAppSelector } from "../../app/hooks";

const PanelInfo = (): JSX.Element => {
  const data = useAppSelector((state) => state.searchSlice.data);

  return (
    <div className="info-ip-address-tracker">
      <Info title="ip address" text={data?.ip || ""} />

      <Info
        title="location"
        text={`${data?.location?.city ? `${data?.location?.city},` : ""} ${
          data?.location?.region || ""
        } ${data?.location?.postalCode || ""}`}
      />
      <Info title="timezone" text={data?.location?.timezone || ""} />
      <Info title="isp" text={data?.isp || ""} separator={false} />
    </div>
  );
};

export default PanelInfo;
