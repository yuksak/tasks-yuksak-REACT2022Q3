import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './index.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={classes.header}>
        <nav className={classes.header__nav}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? classes.active : undefined)}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? classes.active : undefined)}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
