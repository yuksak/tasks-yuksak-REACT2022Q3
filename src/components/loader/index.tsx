import React, { useContext } from 'react';

import styles from './index.module.scss';
import { FiLoader, FiAlertTriangle } from 'react-icons/fi';

import { MainContext } from 'store/main-context';

const Loader = () => {
  const ctx = useContext(MainContext);

  return (
    <div className={styles.loader} data-testid="loader">
      {ctx.errorMessage && !ctx.isLoading ? (
        <p className={styles.error}>
          <FiAlertTriangle /> {ctx.errorMessage}
        </p>
      ) : (
        <FiLoader className={styles.loading} />
      )}
    </div>
  );
};

export default Loader;
