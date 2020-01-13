import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
//import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
//import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import NameList2 from "./components/NameList2";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
          <h1 className="error">Error</h1>
          <h1 className={styles.success}>Success</h1>
        </div>
        <Inline />
        <Form />

        {/*<Inline /> */}
        {/*<Stylesheet primary={false} /> */}
        {/*<NameList2 /> */}
        {/*<NameList /> */}
        {/*<UserGreeting />*/}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick /> */}
        {/* <FunctionClick /> */}
        {/* <Counter /> */}
        {/*<Message /> */}
        <Greet name="Banner" heroName="Avenger">
          <p>This is children props</p>
        </Greet>
        <Greet name="Bruce" heroName="Batman">
          <button>Action</button>
        </Greet>
        {/* <Welcome name="Banner" heroName="Avenger" /> */}

        {/* <Welcome name="Bruce" heroName="Batman" /> */}
        {/* <Hello /> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
