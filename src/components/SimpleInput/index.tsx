import { FC, createElement, useState } from 'react';

import '../../index.css';

export const SimpleInput: FC = () => {
  const [enteredName, setEnteredName] = useState('');
  const [nameFieldTouched, setNameFieldTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && nameFieldTouched;

  const onChangeHandler = (event: any) => {
    setEnteredName(event.target.value);
  };

  const onBlurHandler = (event: any) => {
    setNameFieldTouched(true);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    setNameFieldTouched(true);

    if (!enteredNameIsValid) {
      return;
    } 
    
    console.log(enteredName)

    setEnteredName('');
    setNameFieldTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      </div>
      {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
}