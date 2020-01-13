/**
 * React documentation suggests either approach no-3 & 4.
 * Approach no-4 is still in experimental feature
 * so, Approach no- 3 is best for now.
 *
 * Approch No- 1 (Binding in the render method)
 * bind keyword and bind the handler in render method.
 * impact on performance is not severe on small applications.
 * it could be trouble in some large applications and components that contain nested children components.
 * we not might want to used because of performance implications.
 *
 * Approch No- 2 (Arrow function in the render method)
 * Is although, Similar to aproach no-1. it is probably a easiest way to pass parameter.
 * if your code doesn't involved in re-rendering nested children components then this approach is still a viable option.
 *
 * Approch No- 3 (Binding the event handler in the constructor as opposed to binding in render method)
 * we also see in official react documentation.
 * its better to binding in class constructor rather than binding in render method.
 *
 * Approch No- 4 (Use a arrow function as class property)
 * class property as Arrow function
 * is still in experimental feature
 */

import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello"
    };
    {
      /* Approach No-3 (Binding in the class constructor)*/
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  /*
  clickHandler() {
    this.setState({
      message: "Goodbye!"
    });
    // console.log(this); // undefined  ??
  }
  */

  // Approach No-4 (class property as Arrow function)
  clickHandler = () => {
    this.setState({
      message: "Goodbye!"
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Approach No-1 (Binding in the render method)*/}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Approach No-2 (Arrow function in the render method)*/}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* Approach N0-3 (Binding in the class constructor) */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
