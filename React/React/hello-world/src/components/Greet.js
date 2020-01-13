import React from "react";
/*
function Greet() {
  return <h1>Hello Faiz</h1>;
}
*/

//export const Greet = () => <h1>Hello Faiz</h1>;
//const Greet = props => (

const Greet = ({ name, heroName }) => {
  // Destructuring props in functional component one way
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

/*
const Greet = props => { // Destructuring props in functional component Second way
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {props.children}
    </div>
  );
};
*/
export default Greet;
