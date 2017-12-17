'use strict';

import React from 'react';
import Screen from './Screen';
import Formulae from './Formulae';
import Keyboard from './Keyboard';
import Slick from './Slick';
import SimpleMap from './SimpleMap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import SlickStandalone from './SlickStandalone';
//import { GoogleMap, Marker } from "react-google-maps"

export default function () {

  return (
    <div className='main'>
    <Screen />
    <Formulae />


    <Tabs>
       <TabList>
         <Tab>Drone Map</Tab>
         <Tab>Drone Pictures</Tab>
       </TabList>
       <TabPanel>
          <div style={{width: '100%', height: '400px'}}>
           <SimpleMap/>
          </div>
       </TabPanel>
       <TabPanel>
          <Slick/>
       </TabPanel>
     </Tabs>




    </div>
  );
}
