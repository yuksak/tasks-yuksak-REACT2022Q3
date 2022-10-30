import React, { FC } from 'react';

import styles from './index.module.scss';
import { FiLoader, FiAlertTriangle } from 'react-icons/fi';

import { ILoaderProps } from 'models/loader';

const Loader: FC<ILoaderProps> = (props) => {
  return (
    <div className={styles.loader} data-testid="loader">
      {props.error && !props.isLoading ? (
        <p className={styles.error}>
          <FiAlertTriangle /> {props.error}
        </p>
      ) : (
        <FiLoader className={styles.loading} />
      )}
    </div>
  );
};

export default Loader;
