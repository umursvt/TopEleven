import React, { useState } from 'react';
import ForwardChild from '../forward/forwardChild';

function randomForward() {
  const forwardArray = [
    'Benzema',
    'Depay',
    'DiMaria',
    'Haaland',
    'Kane',
    'Lewandowski',
    'Mane',
    'Martial',
    'Mbappe',
    'Messi',
    'Ronaldo',
    'Salah',
    'Yedder',
  ];
  const random = Math.floor(Math.random() * forwardArray.length);
  return forwardArray[random];
}

function Forward() {
  const [forwards, setForward] = useState([]);

  const handleForward = () => {
    setForward([...forwards, randomForward()]);
  };
  //mapping
  const forwardList = forwards.map((forward, index) => {
    return <ForwardChild key={index} forwardName={forward} />;
  });
  return (
    <div>
      <button onClick={handleForward} disabled={forwards.length === 2}>
        Forward
      </button>
      <div>{forwardList}</div>
    </div>
  );
}

export default Forward;
