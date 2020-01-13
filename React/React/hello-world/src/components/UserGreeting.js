/*
three approaches are:-
1. if else statement.
2. Element Variables.
3. Ternary conditional operator.
4. Short circuit operator.
*/

// rce (for class component)

import React, { Component } from "react";

class UserGreeting extends Component {
  // rconst {for class constructor)
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    // Fourth Approach:= Short Circuit Operator
    // When we want to render either something or nothing we may use of this operator.
    // if isLoggedIn is true then it prints message otherwise not.
    return this.state.isLoggedIn && <div>Welcome Faiz</div>;

    /*
    // Third Approach:= Ternary Operator
    // Benefit- it can be used inside the JSX.
    return this.state.isLoggedIn ? (
      <div>Welcome Faiz</div>
    ) : (
      <div>Welcome Guest</div>
    );
    */

    /*
    // Second Approach:= Element Variable
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Faiz</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }

    return <div>{message}</div>;
    */

    /*
    // First Approach:= If else statement
    if (this.state.isLoggedIn) {
      return <div>Welcome Faiz</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
    */
    // Can we not simply use the if else condition on the message being displayed ?
    // answer is no. if else statemet dont work inside a JSX that is because JSX is just syntactic sugar for functions calls and object construction.
    // adding if else statement within the JSX is not valid.
    // that is the reason we use if else statement outside the JSX, and the entire return statement containing the JSX is placed inside the if and else block.

    /*
     return (
      <div>
        <div>Welcome faiz</div>
        <div>Welcome Guest</div>
      </div>
    );
    */
  }
}

export default UserGreeting;
