import React from 'react';
import planet from '../images/planet.png';
import css from './Navbar.module.css';

const Navbar = () => (
  <div>
    <nav className={css.Navbar}>
      <div className={css.logo}>
        <img src={planet} alt="planetLogo" />
        <h1>
          Space Travellers&#39 Hub
        </h1>
      </div>
      <ul className={css.items}>
        <li>Rockets</li>
        <li>Missions</li>
        <li>|</li>
        <li>My Profile</li>
      </ul>
    </nav>
    <hr />
  </div>
);

export default Navbar;
