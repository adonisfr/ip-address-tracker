import "./App.css";
import Map from "./components/Map/Map";
import PanelContainer from "./components/Panel/PanelContainer";

function App() {
  return (
    <div className="App">
      <header>
        <PanelContainer />
      </header>
      <main>
        <Map />
      </main>
    </div>
  );
}

export default App;
