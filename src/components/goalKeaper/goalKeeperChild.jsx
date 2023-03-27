import React from 'react';
import Allison from '../../img/keeper/allison.jpeg';
import Courtois from '../../img/keeper/courtois.png';
import DeGea from '../../img/keeper/deGea.jpeg';
import Ederson from '../../img/keeper/ederson.png';
import Neuer from '../../img/keeper/neuer.png';
import Oblak from '../../img/keeper/oblak.jpeg';

const Keepers = {
  Allison: Allison,
  Courtois: Courtois,
  DeGea: DeGea,
  Ederson: Ederson,
  Neuer: Neuer,
  Oblak: Oblak,
};

function GoalKeeperChild({ keeperName }) {
  return (
    <div>
      <div>
        <img
          className=" images-keeper  "
          src={Keepers[keeperName]}
          alt="asdas"
        />
      </div>
      <div className=" fs-1 fw-bold "> {keeperName}</div>
    </div>
  );
}

export default GoalKeeperChild;
