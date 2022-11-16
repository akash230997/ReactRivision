import React from 'react'
import { useState } from 'react';
import EffectProp from './EffectProp';

function Effect() {
    const [stateOne, setstateOne] = useState(1);
    const [stateTwo, setstateTwo] = useState('MERNSTACK');
  return (
    <div>
      <h1>Hello Effect</h1>
      <EffectProp stateOne = {stateOne} stateTwo={stateTwo} /><br/><br/>
      <button onClick={() => setstateOne(stateOne + 1)}>Update</button>
      <button onClick={()=>setstateTwo('Akash Meena')}>Get User</button>
    </div>
  );
}

export default Effect