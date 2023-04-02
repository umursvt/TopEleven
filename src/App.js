import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Defance from './components/defance/defance';
import Forward from './components/forward/forward';
import GoalKeeper from './components/goalKeaper/goalKeeper';
import Middle from './components/middle/middle';
import { useState } from 'react';

function App() {
  const [keeper, setKeeper] = useState([]);
  const [defance, setDefance] = useState([]);
  const [middle, setMiddle] = useState([]);
  const [forward, setForward] = useState([]);

  const handleTeam = () => {
    setKeeper([]);
    setDefance([]);
    setMiddle([]);
    setForward([]);
  };

  const defanceProp = (defanceNew) => {
    setDefance(defanceNew);
  };
  const middleProp = (middleNew) => {
    setMiddle(middleNew);
  };
  const forwardProp = (forwardNew) => {
    setForward(forwardNew);
  };
  return (
    <div>
      <div className="App d-flex justify-content-evenly pe-5  mt-1">
        <GoalKeeper />
        <Defance onDefanceProp={defanceProp} />
        <Middle onMiddleProp={middleProp} />
        <Forward onForwardProp={forwardProp} />
      </div>
      <div className="button-parent">
        <button className="reset" onClick={handleTeam}>
          sıfırlar
        </button>
      </div>
    </div>
  );
}

export default App;
