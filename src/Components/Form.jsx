import React from "react";
import { useState } from "react";

function Form() {
    const [AddDetails, setAddDetails] = useState({
        name : '',
        options : '',
        checkBox:false
    });
    const GetAll = (e) =>{
        e.preventDefault()
        // alert('Form Submitted!!')
        console.log(AddDetails);
    }
    const inputVals = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const checkBox = e.target.checked;
        // console.log(e.target.name)
        console.log(value)
        console.log(checkBox);
        console.log(name);
        setAddDetails({
          name: value,
          options: name,
          checkBox: checkBox,
        });
        // let input = e.target.value
        // let Radio = e.target.checked
        // console.log(input)
        // console.log(Radio)
    }
  return (
    <div>
      <h1>FORM VALIDATION :</h1>
      <form action="" onSubmit={GetAll}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          placeholder="Your Name"
          onChange={inputVals}
          name="fName"
          //   value={AddDetails.name}
        />
        <select
          name="SelectBox"
          id=""
          onChange={inputVals}
        //   value={AddDetails.options}
        >
          <option>Marvel</option>
          <option>Dc</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          name="TnC"
          id="TnCs"
          onChange={inputVals}
        //   value={AddDetails.checkBox}
        />
        <label htmlFor="TnCs">Terms and Conditions</label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
