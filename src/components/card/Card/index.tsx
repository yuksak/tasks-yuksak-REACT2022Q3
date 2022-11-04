import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

import { ICard } from 'models/cards';

const Card: FC<ICard> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={styles.card}
        onClick={() => navigate(`/character/${props.id}`)}
        data-testid="card"
      >
        <div className={styles.imageBox} data-testid="card-image">
          <img className={styles.image} src={props.image} alt="image" />
        </div>
        <div className={styles.body} data-testid="card-body">
          <Link to="#" className={styles.title}>
            {props.fullName}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
