import React from "react";

function NameList2() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const persons = [];

  // This code fixes the warning.
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));

  /*
     // Gives warning- two children with the same key, 'Bruce'. 
    // Keys should be unique so that components maintain their identity across updates.
  const nameList = names.map(name => <h2 key={name}>{name}</h2>);
*/

  /*
    // Gives warning in console- Each child in a list should have a unique "key" prop.
  const nameList = names.map(name => <h2>{name}</h2>);
  */

  return <div>{nameList}</div>;
}

export default NameList2;
