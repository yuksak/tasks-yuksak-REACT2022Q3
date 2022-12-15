import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICard } from 'models/cards';
import { FiHeart, FiEye, FiClock } from 'react-icons/fi';

import styles from './index.module.scss';

const DetailedCard: FC<ICard> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img className={styles.image} src={props.image} alt="image" />
      </div>
      <div className={styles.body}>
        <Link to="#" className={styles.title}>
          {props.name}
        </Link>
        <p className={styles.birthday}>Birthday: {props.created?.slice(0, 10)}</p>
        <p className={styles.gender}>Gender: {props.gender}</p>
        <p className={styles.origin}>Origin: {props.origin.name}</p>
      </div>
      <div className={styles.stats}>
        <span>
          <FiHeart /> 123
        </span>
        <span>
          <FiEye /> 123
        </span>
        <span>
          <FiClock /> {props.created?.slice(0, 10)}
        </span>
      </div>
    </div>
  );
};

export default DetailedCard;
