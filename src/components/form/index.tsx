import React, { Component } from 'react';

import { countries } from 'mock';
import { FormProps, FormState } from 'models';
import classes from './index.module.scss';

class Form extends Component<FormProps, FormState> {
  fullNameInput: React.RefObject<HTMLInputElement>;
  birthdayInput: React.RefObject<HTMLInputElement>;
  countryInput: React.RefObject<HTMLSelectElement>;
  maleInput: React.RefObject<HTMLInputElement>;
  femaleInput: React.RefObject<HTMLInputElement>;
  imageInput: React.RefObject<HTMLInputElement>;
  confirmationInput: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.fullNameInput = React.createRef();
    this.birthdayInput = React.createRef();
    this.countryInput = React.createRef();
    this.maleInput = React.createRef();
    this.femaleInput = React.createRef();
    this.imageInput = React.createRef();
    this.confirmationInput = React.createRef();

    this.state = {
      errors: {
        fullNameInput: '',
        birthdayInput: '',
        countryInput: '',
        genderInput: '',
        imageInput: '',
        confirmationInput: '',
      },
      buttonDisabled: true,
      cardSaved: false,
    };
  }

  formSubmissionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (this.inputValidation()) {
      const formData = {
        id: new Date().getTime(),
        fullName: this.fullNameInput.current?.value,
        birthday: this.birthdayInput.current?.value,
        country: this.countryInput.current?.value,
        gender: this.maleInput.current?.checked
          ? this.maleInput.current.value
          : this.femaleInput.current?.value,
        image: URL.createObjectURL(this.imageInput.current!.files![0]),
      };

      if (this.props.addCard) this.props.addCard(formData);

      this.setState({ buttonDisabled: true });
      this.setState({ cardSaved: true });
      e.currentTarget.reset();

      setTimeout(() => this.setState({ cardSaved: false }), 6000);
    } else {
      return;
    }
  };

  buttonEnabler = () => {
    const error = this.state.errors;
    return error.fullNameInput ||
      error.birthdayInput ||
      error.countryInput ||
      error.genderInput ||
      error.confirmationInput
      ? true
      : false;
  };

  componentDidUpdate() {
    if (!this.state.buttonDisabled) {
      if (this.buttonEnabler()) {
        this.setState({ buttonDisabled: true });
      }
    }
  }

  inputValidation = () => {
    const setErrors = {
      fullNameInput: '',
      birthdayInput: '',
      countryInput: '',
      imageInput: '',
      confirmationInput: '',
      genderInput: '',
    };

    let isValid = true;

    if (!this.fullNameInput.current?.value) {
      isValid = false;
      setErrors.fullNameInput = 'Please enter your full name!';
    }

    if (
      this.fullNameInput.current!.value!.length < 6 &&
      this.fullNameInput.current!.value!.length >= 1
    ) {
      isValid = false;
      setErrors.fullNameInput = 'Your name must be more than 6 letters!';
    }

    if (!this.birthdayInput.current?.value) {
      isValid = false;
      setErrors.birthdayInput = 'Please enter your birthday!';
    }

    if (!this.countryInput.current?.value) {
      isValid = false;
      setErrors.countryInput = 'Please enter your country!';
    }

    if (!this.imageInput.current?.value) {
      isValid = false;
      setErrors.imageInput = 'Please add an image!';
    }

    if (!this.maleInput.current?.checked && !this.femaleInput.current?.checked) {
      isValid = false;
      setErrors.genderInput = 'Please choose your gender!';
    }

    if (!this.confirmationInput.current?.checked) {
      isValid = false;
      setErrors.confirmationInput = 'Confirm if you are agree with!';
    }

    this.setState({ errors: setErrors });
    return isValid;
  };

  handleFocus = (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLSelectElement>) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.id]: null,
      },
    });

    if (this.buttonEnabler()) this.setState({ buttonDisabled: true });
  };

  handleChange = () => {
    this.setState({ buttonDisabled: false });

    if (this.buttonEnabler()) this.setState({ buttonDisabled: true });
  };

  render() {
    return (
      <div className={classes.block} data-testid="form-block">
        <form className={classes.form} data-testid="form" onSubmit={this.formSubmissionHandler}>
          <div className={classes.form__fullName}>
            <label htmlFor="fullName">Full Name:</label>
            <input
              className={classes.form__input}
              id="fullNameInput"
              data-testid="fullNameInput"
              type="text"
              placeholder="Enter your full name"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              ref={this.fullNameInput}
            />
            <label className={classes.form__error}>{this.state.errors.fullNameInput}</label>
          </div>
          <div className={classes.form__birthInfo}>
            <div>
              <label htmlFor="birthday">Birthday:</label>

              <input
                className={classes.form__input}
                id="birthdayInput"
                type="date"
                placeholder="Birthday"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                ref={this.birthdayInput}
              />
              <label className={classes.form__error}>{this.state.errors.birthdayInput}</label>
            </div>
            <div>
              <label htmlFor="country">Country:</label>
              <select
                className={classes.form__input}
                name="country"
                id="countryInput"
                defaultValue=""
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                ref={this.countryInput}
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
              <label className={classes.form__error}>{this.state.errors.countryInput}</label>
            </div>
          </div>

          <div className={classes.form__gender}>
            <div style={{ marginRight: '1rem' }}>
              <input
                type="radio"
                name="gender"
                id="genderInput"
                value="Male"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                ref={this.maleInput}
                data-testid="genderInput"
              />
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="Female"
                id="genderInput"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                ref={this.femaleInput}
              />
              <label>Female</label>
            </div>
            <label className={classes.form__error}>{this.state.errors.genderInput}</label>
          </div>

          <div className={classes.form__file}>
            <input
              id="imageInput"
              type="file"
              ref={this.imageInput}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
            />

            <label className={classes.form__error}>{this.state.errors.imageInput}</label>
          </div>

          <div className={classes.form__confirmation}>
            <div></div>
            <label>
              <input
                type="checkbox"
                id="confirmationInput"
                ref={this.confirmationInput}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                data-testid="confirmationInput"
              />
              I consent to my personal data
            </label>
            <br />
            <label className={classes.form__error}>{this.state.errors.confirmationInput}</label>
          </div>

          <div className={classes.form__buttons}>
            <button
              className={classes.form__submit}
              type="submit"
              disabled={this.state.buttonDisabled}
              data-testid="submit-button"
            >
              Submit
            </button>
            {!this.state.buttonDisabled && (
              <button type="reset" className={classes.form__clear}>
                Clear
              </button>
            )}
            {this.state.buttonDisabled && this.state.cardSaved && (
              <button className={classes.form__success}>Saved</button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
