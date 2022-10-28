import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

interface isActive {
  isActive: boolean;
}

const classIsActive = ({ isActive }: isActive) => (isActive ? styles.active : undefined);

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
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
            <li>
              <NavLink to="/forms" className={classIsActive} data-testid="Forms">
                Forms
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
