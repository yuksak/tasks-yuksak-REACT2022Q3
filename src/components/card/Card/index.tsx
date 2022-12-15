import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import { FiHeart, FiEye, FiClock, FiX } from 'react-icons/fi';

import { ICard } from 'models/cards';

const Card: FC<ICard> = (props) => {
  const [isDetailedCard, setIsDetailedCard] = useState<boolean>(false);

  const detailedCardOpener = () => {
    setIsDetailedCard(true);
  };

  const detailedCardCloser = () => {
    setIsDetailedCard(false);
  };

  return (
    <>
      <div className={styles.card} data-testid="card" onClick={detailedCardOpener}>
        <div className={styles.imageBox} data-testid="card-image">
          <img className={styles.image} src={props.image} alt="image" />
        </div>
        <div className={styles.body} data-testid="card-body">
          <Link to="#" className={styles.title}>
            {props.fullName}
          </Link>
        </div>
      </div>

      {isDetailedCard ? (
        <div className={styles.modal} onClick={detailedCardCloser} data-testid="modal">
          <div
            className={`${styles.card} ${styles.detailedCard}`}
            data-testid="detailed-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.imageBox} data-testid="card-image">
              <img className={styles.image} src={props.image} alt="image" />
              <button
                className={styles.modalCloseButton}
                onClick={detailedCardCloser}
                data-testid="card-closer"
              >
                <FiX />
              </button>
            </div>
            <div className={styles.body} data-testid="card-body">
              <Link to="#" className={styles.title}>
                {props.fullName}
              </Link>
              <p className={styles.birthday}>Birthday: {props.birthday?.slice(0, 10)}</p>
              <p className={styles.gender}>Gender: {props.gender}</p>
              <p className={styles.origin}>Origin: {props.country}</p>
            </div>
            <div className={styles.stats} data-testid="card-stats">
              <span>
                <FiHeart /> {props.likes}
              </span>
              <span>
                <FiEye /> {props.views}
              </span>
              <span>
                <FiClock /> {props.created?.slice(0, 10)}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Card;
