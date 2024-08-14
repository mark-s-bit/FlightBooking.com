import "./App.css";
import HomePage from "./components/HomePage";
import DispalayAvailableFlights from "./components/DispalayAvailableFlights";
function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        {" "}
        <HomePage />
        <DispalayAvailableFlights />
      </div>
    </>
  );
}

export default App;
