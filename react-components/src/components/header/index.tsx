import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './index.module.scss';

interface isActive {
  isActive: boolean;
}

const classIsActive = ({ isActive }: isActive) => (isActive ? classes.active : undefined);

class Header extends Component {
  render() {
    return (
      <header className={classes.header}>
        <nav className={classes.header__nav}>
          <ul>
            <li>
              <NavLink to="/" className={classIsActive} data-testid="Home" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={classIsActive} data-testid="About-Us">
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
