import React, { Component } from 'react';
import { FiLoader, FiAlertTriangle } from 'react-icons/fi';

import styles from './index.module.scss';

interface IError {
  error: string;
  isLoading: boolean;
}

class Loader extends Component<IError> {
  constructor(props: IError) {
    super(props);
  }

  render() {
    return (
      <div className={styles.loader}>
        {this.props.error && !this.props.isLoading ? (
          <p className={styles.error}>
            <FiAlertTriangle /> {this.props.error}
          </p>
        ) : (
          <FiLoader className={styles.loading} />
        )}
      </div>
    );
  }
}

export default Loader;
