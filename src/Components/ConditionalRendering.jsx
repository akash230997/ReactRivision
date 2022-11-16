import React from 'react'
import { useState } from 'react';

function ConditionalRendering() {
    const Numb = document.getElementById("text").value;
    const elem = parseInt(Numb);
    const [Check, setCheck] = useState(elem);
  return (
    <div>
      <h1>ConditionalRendering</h1>
      <input type="text" id="text" placeholder="Give Condition" />
      <button onClick={() => setCheck(elem)}>Check</button>
      {Check === 1 ? (
        <h1>Welcome To User One</h1>
      ) : Check === 2 ? (
        <h1>Welcome To User Two</h1>
      ) : (
        <h1>Welcome To User Three</h1>
      )}
    </div>
  );
}

export default ConditionalRendering