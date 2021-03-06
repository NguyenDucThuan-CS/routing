import React, { Component } from "react";
import { NavLink } from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          {/* Brand */}
          <NavLink exact activeClassName = "active"className="navbar-brand" to="/">
            Home
          </NavLink>
          {/* Toggler/collapsibe Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink  activeClassName = "active" className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  activeClassName = "active" className="nav-link" to="/list-movie">
                  List movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  activeClassName = "active" className="nav-link" to="/hoc">
                  HOC
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  activeClassName = "active" className="nav-link" to="/render-props">
                  Render props
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink  activeClassName = "active" className="nav-link" to="/hook">
                  Hook
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
