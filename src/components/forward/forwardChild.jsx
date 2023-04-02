import React from 'react';
import Benzema from '../../img/forward/benzema.png';
import Depay from '../../img/forward/depay.png';
import DiMaria from '../../img/forward/diMaria.jpeg';
import Haaland from '../../img/forward/haaland.jpeg';
import Kane from '../../img/forward/kane.jpeg';
import Lewandowski from '../../img/forward/lewandowski.png';
import Mane from '../../img/forward/mane.jpeg';
import Martial from '../../img/forward/martial.jpeg';
import Mbappe from '../../img/forward/mbappe.jpeg';
import Messi from '../../img/forward/messi.jpeg';
import Ronaldo from '../../img/forward/ronaldo.jpeg';
import Salah from '../../img/forward/salah.jpeg';
import Yedder from '../../img/forward/yedder.jpeg';

const Forwards = {
  Benzema: Benzema,
  Depay: Depay,
  DiMaria: DiMaria,
  Haaland: Haaland,
  Kane: Kane,
  Lewandowski: Lewandowski,
  Mane: Mane,
  Martial: Martial,
  Messi: Messi,
  Mbappe: Mbappe,
  Ronaldo: Ronaldo,
  Salah: Salah,
  Yedder: Yedder,
};
function forwardChild({ forwardName }) {
  return (
    <div>
      <div>
        <img className=" images-forward  " src={Forwards[forwardName]} alt="" />
        <div className=" fs-5 fw-bold ">
          {' '}
          <p className="name">{forwardName}</p>{' '}
        </div>
      </div>
    </div>
  );
}

export default forwardChild;
