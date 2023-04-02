import React, { useEffect, useState } from 'react';
import MiddleChild from '../../components/middle/middleChild';

function randomMiddle() {
  const middleArray = [
    'Ansu',
    'Barella',
    'Brozovic',
    'Cancelo',
    'Casemiro',
    'DeBruyne',
    'Fofana',
    'Gavi',
    'Hakan',
    'Kante',
    'Rodri',
    'Silva',
    'Sterling',
    'Theo',
    'Vitinha',
    'Zielinski',
  ];
  const random = Math.floor(Math.random() * middleArray.length);
  return middleArray[random];
}

function Middle({ onMiddleProp }) {
  const [middles, setMiddle] = useState([]);
  const handleMiddle = () => {
    setMiddle((prevMiddles) => {
      const newMiddles = [...middles, randomMiddle()];
      return newMiddles;
    });
  };
  useEffect(() => {
    onMiddleProp(middles);
  }, [middles, onMiddleProp]);
  //mapping
  const middleList = middles.map((middle, index) => {
    return <MiddleChild key={index} middleName={middle} />;
  });
  return (
    <div>
      <button onClick={handleMiddle} disabled={middles.length === 4}>
        Middle
      </button>
      <div>{middleList}</div>
    </div>
  );
}

export default Middle;
