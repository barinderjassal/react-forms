import { useState } from 'react';

export const useInput = (validate: any) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isFieldValid = validate(value);
  const hasError = !isFieldValid && isTouched;

  const onChangeHandler = (event: any) => {
    setValue(event.target.value);
  };

  const onBlurHandler = (event: any) => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  }

  return {
    value,
    hasError,
    isValid: isFieldValid,
    onChangeHandler,
    onBlurHandler,
    reset
  };
}