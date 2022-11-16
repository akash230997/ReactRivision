import React from "react";

function Map() {
  // const arr = [
  //   "Akash",
  //   "Pragya",
  //   "Sairaam",
  //   " Priyanshi",
  //   "Anchal",
  //   "Jeevesh",
  // ];
  const arr = [
    { name: "Akash", Job: "Developer", Age: 25 },
    { name: "Pragya", Job: "Marketing", Age: 25 },
    { name: "Sairam", Job: "Developer", Age: 25 },
    { name: "Priyanshi", Job: "Developer", Age: 25 },
    { name: "Jeevesh", Job: "Developer", Age: 25 },
  ];
  return (
    <div>
      <h1>Map Method :</h1>
      <center>
        <table border="10" cellPadding='0'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Age</th>
            </tr>
          </thead>
          {arr.map((curI, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>
                    <td>{(curI.name +  " ~ "  + index)}</td>
                  </td>
                  <td>
                    <td>{curI.Job}</td>
                  </td>
                  <td>
                    <td>{curI.Age}</td>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </center>
    </div>
  );
}

export default Map;
