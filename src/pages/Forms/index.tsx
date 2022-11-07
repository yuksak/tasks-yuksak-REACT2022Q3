import React, { useContext } from 'react';

import { Form } from 'components';

import { useAppSelector } from 'hooks';
import FormCards from 'components/form/formCards';

import styles from './index.module.scss';

const Forms = () => {
  const { forms } = useAppSelector((state) => state.forms);

  return (
    <div className={styles.section} data-testid="forms-page">
      <Form />
      <FormCards cards={forms} />
    </div>
  );
};

export default Forms;
