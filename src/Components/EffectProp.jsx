import React from 'react';
import { useEffect } from 'react';

function EffectProp(props) {
    useEffect(() => {
      console.log("First");
    },[props.stateOne]);
  return (
    <div>
        {props.stateOne + " ~ " + props.stateTwo}
    </div>
  )
}

export default EffectProp;