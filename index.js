import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    // observable
    const obj = {
      a: 1,
      obs: [],

      setA(newA) {
        let oldA = this.a;
        this.a = newA;
        this.obs.forEach(ob => ob(oldA, newA));
      },

      addObservers(ob) {
        this.obs.push(ob);
      },

      removeObservers() {
        this.obs = [];
      }
    };

    // observer
    const observer_1 = (prev, next) => {
      console.log("obs 1");
      console.log(prev);
      console.log(next);
    };
    const observer_2 = (prev, next) => {
      console.log("obs 2");
      console.log(prev);
      console.log(next);
    };
    const observer_3 = (prev, next) => {
      console.log("obs 3");
      console.log(prev);
      console.log(next);
    };

    obj.addObservers(observer_1);
    obj.addObservers(observer_2);
    obj.addObservers(observer_3);

    obj.setA(1);
    obj.setA(3);

    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
