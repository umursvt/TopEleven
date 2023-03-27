import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Defance from './components/defance/defance';
import Forward from './components/forward/forward';
import GoalKeeper from './components/goalKeaper/goalKeeper';
import Middle from './components/middle/middle';

function App() {
  return (
    <div className="App d-flex justify-content-evenly pe-5  mt-1">
      <GoalKeeper />

      <Defance />
      <Middle />
      <Forward />
    </div>
  );
}

export default App;
