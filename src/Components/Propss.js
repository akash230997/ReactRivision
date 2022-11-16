import React, { useState } from 'react';
import NestedProp from './NestedProp';

export default function Propss(props) {
  // console.log(props.name);
  const [PassNested] = useState(props);
  const [value, setValue] = useState()
  const [Show, setShow] = useState(false)
  // console.log(props.name.name) 
  // console.log(props.name.Age) 
  // props.name.Functionss() 
  const getVal = (e) => {
    setValue(e.target.value);
    setShow(false);
  }
  return (
    <div>
      <h1>Props :</h1>
      <NestedProp Pass={PassNested} />
      <input type="text" placeholder='Type Something' onChange={getVal}/>
      <button onClick={()=>setShow(true)}>Click</button>
      {Show? <h1>{value}</h1> : null}
    </div>
  )
}

