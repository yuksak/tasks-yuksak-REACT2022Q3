import React, { useContext } from 'react';

import { Cards, Form } from 'components';

import styles from './index.module.scss';
import { MainContext } from 'store/main-context';

const Forms = () => {
  const ctx = useContext(MainContext);

  return (
    <div className={styles.section} data-testid="forms-page">
      <Form />
      <Cards cards={ctx.forms} />
    </div>
  );
};

export default Forms;
