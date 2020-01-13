import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

// rce (shortcut for writing)
class ParentComponent extends Component {
  // rconst (shortcut for wrinting)
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent"
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    {
      /* greetParent() { */
    }
    {
      /* alert(`Hello ${this.state.parentName}`); */
    }
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
