import Payment from "./components/Payment";
import NavigationBar from "./components/NavigationBar";
import DetailCollection from "./routes/DetailCollection";
import Ticket from "./routes/Ticket";
import HomeIn from "./HomeIn";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <HomeIn />

      <Outlet />
    </div>
  );
}
export default App;
