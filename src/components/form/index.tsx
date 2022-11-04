import React, { useContext, useEffect } from 'react';

import { countries } from 'mock';
import styles from './index.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInputs } from 'models/form';
import { MainContext } from 'store/main-context';

const Form = () => {
  const ctx = useContext(MainContext);

  const {
    reset,
    register,
    formState,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isDirty },
  } = useForm<IFormInputs>({
    defaultValues: {
      fullName: '',
      birthday: '',
      country: '',
      gender: '',
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) setTimeout(() => reset(), 3000);
  }, [formState]);

  const submitHandler: SubmitHandler<IFormInputs> = (
    { fullName, birthday, country, gender, image },
    e
  ) => {
    const newCard = {
      id: new Date().getTime(),
      fullName,
      birthday,
      country,
      gender,
      image: URL.createObjectURL(image[0]),
      created: new Date().toISOString(),
      views: 1,
      likes: 23,
    };

    ctx.addForm(newCard);
    e?.target.reset();
  };

  return (
    <div className={styles.block} data-testid="form-block">
      <form className={styles.form} onSubmit={handleSubmit(submitHandler)} data-testid="form">
        <div className={styles.fullName}>
          <label>Full Name:</label>
          <input
            {...register('fullName', {
              required: 'Please enter your full name!',
              minLength: { value: 6, message: 'Your name must be more than 6 letters!' },
            })}
            type="text"
            className={styles.input}
            placeholder="Enter your full name"
            data-testid="fullNameInput"
          />
          {errors.fullName ? (
            <label className={styles.error} data-testid="errorAlert">
              {errors.fullName?.message}
            </label>
          ) : null}
        </div>

        <div className={styles.birthInfo}>
          <div>
            <label>Birthday:</label>
            <input
              {...register('birthday', {
                required: 'Please enter your birthday!',
              })}
              type="date"
              placeholder="Birthday"
              className={styles.input}
              data-testid="birthdayInput"
            />
            {errors.birthday ? (
              <label className={styles.error} data-testid="errorAlert">
                {errors.birthday?.message}
              </label>
            ) : null}
          </div>

          <div>
            <label>Country:</label>
            <select
              {...register('country', {
                required: 'Please enter your country!',
              })}
              name="country"
              defaultValue=""
              className={styles.input}
              data-testid="countryInput"
            >
              {countries.map((country: string) => (
                <option
                  key={country}
                  value={country !== 'Select' ? country : ''}
                  disabled={country !== 'Select' ? false : true}
                >
                  {country}
                </option>
              ))}
            </select>
            {errors.country ? (
              <label className={styles.error} data-testid="errorAlert">
                {errors.country?.message}
              </label>
            ) : null}
          </div>
        </div>

        <div className={styles.gender}>
          <div style={{ marginRight: '1rem' }}>
            <input
              {...register('gender', {
                required: errors.gender?.message ? '' : 'Please choose your gender!',
              })}
              type="radio"
              name="gender"
              value="Male"
              data-testid="genderInput"
            />
            <label>Male</label>
            <input
              {...register('gender', {
                required: errors.gender?.message ? '' : 'Please choose your gender!',
              })}
              type="radio"
              name="gender"
              value="Female"
              id="genderInput"
            />
            <label>Female</label>
          </div>
          {errors.gender ? (
            <label className={styles.error} data-testid="errorAlert">
              {errors.gender?.message}
            </label>
          ) : null}
        </div>

        <div className={styles.file}>
          <input
            {...register('image', {
              // required: 'Please add an image!',
            })}
            type="file"
            data-testid="fileInput"
          />
          {/* {errors.image ? (
            <label className={styles.error} data-testid="errorAlert">
              {errors.image?.message}
            </label>
          ) : null} */}
        </div>

        <div className={styles.confirmation}>
          <input
            {...register('confirmation', {
              required: 'You must confirm!',
            })}
            type="checkbox"
            data-testid="confirmationInput"
          />
          <label>I consent to my personal data</label>
          <br />
          {errors.confirmation ? (
            <label className={styles.error} data-testid="errorAlert">
              {errors.confirmation?.message}
            </label>
          ) : null}
        </div>

        <div className={styles.buttons}>
          {!isSubmitSuccessful ? (
            <input
              className={styles.submitButton}
              type="submit"
              value="Submit"
              disabled={!isDirty}
              data-testid="submitButton"
            />
          ) : null}

          {isDirty && !isSubmitSuccessful ? (
            <input
              type="reset"
              value="Clear"
              className={styles.clearButton}
              data-testid="clearButton"
              // onClick={() => reset()}
            />
          ) : null}

          {isSubmitSuccessful ? (
            <input
              className={styles.successMessage}
              value="Saved"
              type="button"
              data-testid="savedButton"
            />
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Form;
