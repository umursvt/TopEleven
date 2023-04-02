import React, { useEffect, useState } from 'react';
import ForwardChild from './forwardChild';

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

function Forward({ onForwardProp }) {
  const [forwards, setForward] = useState([]);

  const handleForward = () => {
    setForward((prevForwards) => {
      const newForwards = [...prevForwards, randomForward()];
      return newForwards;
    });
  };
  useEffect(() => {
    onForwardProp(forwards);
  }, [forwards, onForwardProp]);
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
