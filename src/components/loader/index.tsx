import React from 'react';

import { useAppSelector } from 'hooks';
import { FiLoader, FiAlertTriangle } from 'react-icons/fi';

import styles from './index.module.scss';

const Loader = () => {
  const { error, status } = useAppSelector((state) => state.cards);

  return (
    <div className={styles.loader} data-testid="loader">
      {error && status === 'Rejected' ? (
        <p className={styles.error}>
          <FiAlertTriangle /> {error}
        </p>
      ) : (
        <FiLoader className={styles.loading} />
      )}
    </div>
  );
};

export default Loader;
