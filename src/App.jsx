

import Payment from "./components/Payment";
import NavigationBar from "./components/NavigationBar";
import DetailCollection from './routes/DetailCollection'
import Ticket from './routes/Ticket';
import HomeIn from './HomeIn'

function App() {
  return (
    <div>
      <Payment />
      <DetailCollection />
      <Ticket />
     <HomeIn/>
    </div>
  );

}
export default App;
