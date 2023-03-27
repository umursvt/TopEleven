import React, { useState } from 'react';
import DefanceChild from '../../components/defance/defanceChild';

function randomDefance() {
  const defanceArray = [
    'Camavinga',
    'DeLight',
    'Hernandez',
    'Laporte',
    'Marq',
    'Ramos',
    'Rudiger',
    'Savic',
    'Telles',
    'VanDijk',
    'Varane',
  ];
  const random = Math.floor(Math.random() * defanceArray.length);
  return defanceArray[random];
}

function Defance() {
  const [defances, setDefance] = useState([]);

  const handleDefance = () => {
    setDefance([...defances, randomDefance()]);
    console.log(defances);
  };
  //mapping
  const defanceList = defances.map((defance, index) => {
    return <DefanceChild key={index} defanceName={defance} />;
  });

  return (
    <div>
      <button onClick={handleDefance} disabled={defances.length === 4}>
        Defance
      </button>
      <div> {defanceList} </div>
    </div>
  );
}

export default Defance;
