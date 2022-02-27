import { createElement, FC } from 'react';
import { useForm } from '../../hooks/use-form';
import { SignupFormObj } from './util';

import './styles/signup-form.css';

export const SignupForm: FC = () => {
  const { renderFormInputs, isFormValid } = useForm(SignupFormObj);

  return (
    <form className="signupForm">
      <h1>Sign Up</h1>

      {renderFormInputs()}

      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </form>
  );
}