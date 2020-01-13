//    17- List Rendering by Vishwas
// rfce (creates react functional component.)

import React from "react";
import Person from "./Person.js";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React"
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular"
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue"
    }
  ];
  // key is unique within a list. it would be anything id,name,age etc.(key prop warning gone from console)
  // key prop is not accessible in child components.
  const personList = persons.map(person => (
    <Person key={person.name} person={person} />
  ));

  /*
  const personList = persons.map(person => <Person person={person} />);
  */

  /*
 const personList = persons.map(person => (
    <h2>
      I am {person.name}. I am {person.age} year old. I know {person.skill}
    </h2>
  ));
*/

  return <div>{personList}</div>;
}

/*
  const personList = persons.map(person => (
    <h2>
      I am {person.name}. I am {person.age} year old. I know {person.skill}
    </h2>
  ));
  return <div>{personList}</div>;
  */

/*
function NameList() {
  const names = ["Bruce", "Clark", "Daina"];
  const nameList = names.map(name => <h2>{name}</h2>);
  return <div>{nameList}</div>;
}
*/

export default NameList;
