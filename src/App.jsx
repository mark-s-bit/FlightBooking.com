
import Payment from "./components/Payment";
import NavigationBar from "./components/NavigationBar";
import DetailCollection from './routes/DetailCollection'
import Ticket from './routes/Ticket';

function App() {
  return (
    <div>
      <Payment />
      <DetailCollection />
      <Ticket />
    </div>
  );
}
export default App;
