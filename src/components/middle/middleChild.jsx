import React from 'react';
import Ansu from '../../img/middle/ansu.jpeg';
import Barella from '../../img/middle/barella.jpeg';
import Brozovic from '../../img/middle/brozovic.png';
import Cancelo from '../../img/middle/cancelo.jpeg';
import Casemiro from '../../img/middle/casemiro.jpeg';
import DeBruyne from '../../img/middle/deBruyne.jpeg';
import Fofana from '../../img/middle/fofana.jpeg';
import Gavi from '../../img/middle/gavi.jpeg';
import Hakan from '../../img/middle/hakan.jpeg';
import Kante from '../../img/middle/kante.jpeg';
import Rodri from '../../img/middle/rodri.jpeg';
import Silva from '../../img/middle/silva.jpeg';
import Sterling from '../../img/middle/sterling.jpeg';
import Theo from '../../img/middle/theo.jpeg';
import Vitinha from '../../img/middle/vitinha.jpeg';
import Zielinski from '../../img/middle/zielinski.jpeg';

const Middles = {
  Ansu: Ansu,
  Barella: Barella,
  Brozovic: Brozovic,
  Cancelo: Cancelo,
  Casemiro: Casemiro,
  DeBruyne: DeBruyne,
  Fofana: Fofana,
  Gavi: Gavi,
  Hakan: Hakan,
  Kante: Kante,
  Rodri: Rodri,
  Silva: Silva,
  Theo: Theo,
  Sterling: Sterling,
  Vitinha: Vitinha,
  Zielinski: Zielinski,
};
function MiddleChild({ middleName }) {
  return (
    <div>
      <div>
        <img
          className=" images-middle my-2 "
          src={Middles[middleName]}
          alt=""
        />
        <div className="fs-5 fw-bold">
          {' '}
          <p className="name">{middleName}</p>
        </div>
      </div>
    </div>
  );
}

export default MiddleChild;
