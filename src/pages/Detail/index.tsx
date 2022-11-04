import React, { useContext } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

import { MainContext } from 'store/main-context';
import { Loader } from 'components';

import styles from './index.module.scss';
import { FiHeart, FiEye, FiClock, FiChevronLeft } from 'react-icons/fi';

const Detail = () => {
  const { id } = useParams();
  const { cards } = useContext(MainContext);
  const navigate = useNavigate();

  const detailedData = cards.filter((card) => card.id === Number(id));

  //   if (cards.length === 0) return <Loader />;

  if (detailedData.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)}>
        <FiChevronLeft /> Back
      </button>
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <img className={styles.image} src={detailedData[0].image} alt="image" />
        </div>
        <div className={styles.body}>
          <Link to="#" className={styles.title}>
            {detailedData[0].fullName}
          </Link>
          <p className={styles.birthday}>Birthday: {detailedData[0].birthday?.slice(0, 10)}</p>
          <p className={styles.gender}>Gender: {detailedData[0].gender}</p>
          <p className={styles.origin}>Origin: {detailedData[0].country}</p>
        </div>
        <div className={styles.stats}>
          <span>
            <FiHeart /> {detailedData[0].likes}
          </span>
          <span>
            <FiEye /> {detailedData[0].views}
          </span>
          <span>
            <FiClock /> {detailedData[0].created?.slice(0, 10)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
