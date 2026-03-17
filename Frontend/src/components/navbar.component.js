import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark">

        {/* Brand */}
        <Link to="/" className="navbar-brand fw-bold">
          World Runner
        </Link>

        {/* Push items to right */}
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link to="/view-world" className="nav-link">
                View World State
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/run-world" className="nav-link">
                Run World
              </Link>
            </li>

          </ul>
        </div>

      </nav>
    );
  }
}