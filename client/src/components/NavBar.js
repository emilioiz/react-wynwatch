import React, { Component } from "react";
import MovieFilters from "./MovieFilters";
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-l">
          <NavLink exact to="/" className="logo">WYNWATCH</NavLink>
          <div><MovieFilters genreList={this.props.genreList} /></div>
        </div>
        <div className="navbar-r">
          <div>
            <NavLink exact to="/Teapot">
              <i className="fab fa-elementor navbar-icons"></i>
            </NavLink>
          </div>
          <div>
            <NavLink exact to="/Teapot">
              <i className="fad fa-popcorn navbar-icons"></i>
            </NavLink>
          </div>
          <div>
            <NavLink exact to="/Teapot">
              <i className="fad fa-user navbar-icons"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;