import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { useAppSelector } from 'hooks';
import { DetailedCard, Loader } from 'components';

import { FiChevronLeft } from 'react-icons/fi';
import styles from './index.module.scss';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { cards } = useAppSelector((state) => state.cards);

  const card = cards.filter((card) => card.id === Number(id))[0];

  // if (cards.length === 0) return <Loader />;

  if (!card) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)}>
        <FiChevronLeft /> Back
      </button>
      <DetailedCard key={card.id} {...card} />
    </div>
  );
};

export default Detail;
