import React, { useEffect } from 'react'; // Import React
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, setReserve } from '@rocketsSlice';
import LoadingSpinner from '@LoadingR';
import css from './Rockets.module.css';

function Rockets() { // Make sure this is a proper function component with React imported
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.allRockets);
  const { loading } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  if (loading) {
    return <LoadingSpinner />; // Removed unnecessary Fragment here
  }
  return (
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id} className={css.container}>
          <div className={css.imagecontainer}>
            <img src={rocket.flickr_images} alt="rocket" />
          </div>
          <div className={css.info}>
            <p className={css.title}>{rocket.rocket_name}</p>
            <p className={css.desc}>
              {rocket.reserved ? <span className={css.badge}>Reserved</span> : ''}
              {' '}
              {rocket.description}
            </p>
            {rocket.reserved
              && <button type="button" className={css.cancelreservation} onClick={() => { dispatch(setReserve({ id: rocket.id, reserved: !rocket.reserved })); }}>Cancel Reservation</button>}
            {!rocket.reserved && <button type="button" className={css.reserve} onClick={() => { dispatch(setReserve({ id: rocket.id, reserved: !rocket.reserved })); }}>Reserve Rocket</button>}
          </div>
        </div>
      ))}
    </>
  );
}

export default Rockets;
