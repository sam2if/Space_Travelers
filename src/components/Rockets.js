import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './Rockets.module.css';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import LoadingSpinner from './LoadingR';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.allRockets);
  const { loading } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id} className={css.container}>
          <div className={css.imageContainer}>
            <img src={rocket.flickr_images} alt="rocket" />
          </div>
          <div className={css.info}>
            <p className={css.title}>{rocket.name}</p>
            <p className={css.desc}>
              {rocket.reserved && <span className={css.badge}>Reserved</span>}
              {rocket.description}
            </p>

            {/* { <button
              type="button"
              className={rocket.reserved ? css.cancelReservation : css.reserve}
              onClick={() => {
                dispatch(setReserve({ id: rocket.id, reserved: !rocket.reserved }));
              }}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button> } */}
          </div>
        </div>
      ))}
    </>
  );
}

export default Rockets;
