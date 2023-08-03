import React from 'react';
import { useSelector } from 'react-redux';
import css from './Profile.module.css';

function Profile() {
  const rockets = useSelector((state) => state.rockets.allRockets);
  const reserved = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div>
      <div className={css.rocketscont}>
        <p className={css.heading}>My Rockets</p>
        { reserved ? reserved.map((rocket) => (<p key={rocket.id} className={css.elem}>{rocket.rocket_name}</p>)) : ''}
      </div>
    </div>
  );
}

export default Profile;
