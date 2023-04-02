import Camavinga from '../../img/defenders/camavinga.jpeg';
import DeLight from '../../img/defenders/deLight.jpeg';
import Hernandez from '../../img/defenders/hernandez.jpeg';
import Laporte from '../../img/defenders/laporte.jpeg';
import Marq from '../../img/defenders/marq.png';
import Ramos from '../../img/defenders/ramos.jpeg';
import Rudiger from '../../img/defenders/rudiger.jpeg';
import Savic from '../../img/defenders/savic.webp';
import Telles from '../../img/defenders/telles.jpeg';
import VanDijk from '../../img/defenders/vanDijk.jpeg';
import Varane from '../../img/defenders/varane.jpeg';
import React from 'react';

const Defanders = {
  Camavinga: Camavinga,
  DeLight: DeLight,
  Hernandez: Hernandez,
  Laporte: Laporte,
  Marq: Marq,
  Ramos: Ramos,
  Rudiger: Rudiger,
  Savic: Savic,
  Telles: Telles,
  Varane: Varane,
  VanDijk: VanDijk,
};

function defanceChild({ defanceName }) {
  return (
    <div>
      <div>
        <img
          className="images-defance my-2 "
          src={Defanders[defanceName]}
          alt=""
        />
        <div className="   fs-5 fw-bold ">
          <p className="name-defance">{defanceName}</p>
        </div>
      </div>
    </div>
  );
}

export default defanceChild;
