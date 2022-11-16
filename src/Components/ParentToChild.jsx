import React from 'react'

function ParentToChild(prop) {
const state = 'Values Checking.........'
  return (
    <div>
      <h1>HelloWorld</h1>
      <button onClick={() => prop.func(state)}>Click</button>
    </div>
  );
}

export default ParentToChild;
