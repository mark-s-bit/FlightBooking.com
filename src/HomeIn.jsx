import "./App.css";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.css";

import DispalayAvailableFlights from "./components/DispalayAvailableFlights";
function App() {
  return (
    <>
      <div
        className="row container-fluid my-0 p-0 "
        style={{
          overflow: "hidden",
          height: "100%",
          width: "100%",
          margin: "0px",
          backgroundColor: " #413f3f",
        }}
      >
        <div className="col-sm-12 col-md-7">
          <HomePage />
        </div>
        <div className="col-sm-12 col-md-5">
          <DispalayAvailableFlights />
        </div>
      </div>
    </>
  );
}

export default App;
