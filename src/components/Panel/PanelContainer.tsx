import PanelInfo from "./PanelInfo";
import Search from "./Search";
import Title from "./Title";

const PanelContainer = (): JSX.Element => {
  return (
    <section className="section-search-and-info">
      <Title text="IP Address Tracker" />
      <Search />
      <PanelInfo />
    </section>
  );
};

export default PanelContainer;
