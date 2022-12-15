import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MainContext } from 'store/main-context';

import styles from './index.module.scss';

const classIsActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles.active : undefined;

const Header = () => {
  const { cards } = useContext(MainContext);
  const { pathname } = useLocation();

  const detailedData = cards.filter(
    (card) => card.id === Number(pathname.replace('/character/', ''))
  );

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
          {detailedData.length !== 0 ? (
            <li>
              <NavLink to="#" className={classIsActive}>
                Character
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
