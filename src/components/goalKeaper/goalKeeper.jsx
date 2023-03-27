import React, { useState } from 'react';
import GoalKeeperChild from './goalKeeperChild';

function randomKeeper() {
  const keeperArray = [
    'Allison',
    'Courtois',
    'DeGea',
    'Ederson',
    'Neuer',
    'Oblak',
  ];
  const random = Math.floor(Math.random() * keeperArray.length);
  return keeperArray[random];
}

function GoalKeaper() {
  const [keepers, setKeeper] = useState([]);

  const handleKeeper = () => {
    setKeeper([randomKeeper()]);
  };
  //mapping
  const goalKeeperList = keepers.map((keeper, index) => {
    return <GoalKeeperChild key={index} keeperName={keeper} />;
  });

  return (
    <div>
      <button onClick={handleKeeper} disabled={keepers.length === 1}>
        Keeper
      </button>
      <div>{goalKeeperList}</div>
    </div>
  );
}

export default GoalKeaper;
