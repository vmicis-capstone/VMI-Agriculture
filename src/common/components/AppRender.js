'use strict';

import React from 'react';
import Screen from './Screen';
import Formulae from './Formulae';
import Keyboard from './Keyboard';
import Slick from './Slick';
//import SlickStandalone from './SlickStandalone';

export default function () {
  return (
    <div className='main'>


      <Screen />
      <Formulae />
      <Slick/>

    </div>
  );
}
