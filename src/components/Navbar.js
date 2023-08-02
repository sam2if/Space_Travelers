import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';
import css from './Navbar.module.css';

function Navbar() {
  return (
    <div>
      <nav className={css.Navbar}>
        <div className={css.logo}>
          <img src={planet} alt="planetLogo" />
          <h1>
            Space Travellers Hub
          </h1>
        </div>
        <ul className={css.items}>
          <li>
            <NavLink to="/" className={css.navigator} activeClassName="active">
              Rockets
            </NavLink>

          </li>
          <li>
            <NavLink to="/missions" className={css.navigator} activeClassName="active">
              Missions
            </NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/profile" className={css.navigator} activeClassName="active">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
