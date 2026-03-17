import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-holder">
        <div className="jumbotron vertical-align">
          <div className="container white-text">
            <h1 className="display-4">Welcome To World Runner</h1>
            <p className="lead">Run your world and keep track of its history!</p>
            <p className="lead">
              <a className="site-button" href="/view-world" role="button">
                View World State
              </a>
              <a className="site-button ml-3" href="/run-world" role="button">
                Run World
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}