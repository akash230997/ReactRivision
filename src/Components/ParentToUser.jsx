import React from 'react'
import ParentToChild from './ParentToChild'

function ParentToUser() {
    function abc(state) {
      alert(
        `Hello From Main Functions Which helps us to pass the values from child to Parent!! ${state}`
      );
    }
  return (
    <div>
      <h1>Hello From This SIde</h1>
      <ParentToChild func={abc} />
    </div>
  );
}

export default ParentToUser
