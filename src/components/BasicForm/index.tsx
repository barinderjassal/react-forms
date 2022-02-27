import { FC, createElement } from 'react';
import { useInput } from '../../hooks/use-input';

import '../../index.css';

const isFieldEmpty = (value: string) => value.trim() !== '';
const isEmailValid = (value: string) => value.includes('@');

export const BasicForm: FC = () => {
  const {
    value: firstNameValue,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    onBlurHandler: onFirstNameBlurHandler,
    onChangeHandler: onFirstNameChangeHandler,
    reset: resetFirstName
  } = useInput(isFieldEmpty);

  const {
    value: lastNameValue,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    onBlurHandler: onLastNameBlurHandler,
    onChangeHandler: onLastNameChangeHandler,
    reset: resetLastName
  } = useInput(isFieldEmpty);

  const {
    value: emailValue,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    onBlurHandler: onEmailBlurHandler,
    onChangeHandler: onEmailChangeHandler,
    reset: resetEmail
  } = useInput(isEmailValid);

  const formIsValid = enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  // reset all the fields to their initial value
  const resetForm = () => {
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  const onFormSubmission = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    resetForm();
  };

  const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onFormSubmission}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='fname'
            value={firstNameValue}
            onChange={onFirstNameChangeHandler}
            onBlur={onFirstNameBlurHandler}
          />
        {firstNameHasError && <p className="error-text">First Name must not be empty</p>}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='lname'
            value={lastNameValue}
            onChange={onLastNameChangeHandler}
            onBlur={onLastNameBlurHandler}
          />
        {lastNameHasError && <p className="error-text">Last Name must not be empty</p>}
        </div>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={emailValue}
          onChange={onEmailChangeHandler}
          onBlur={onEmailBlurHandler}
        />
      </div>
      {emailHasError && <p className="error-text">Please enter a valid email</p>}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}