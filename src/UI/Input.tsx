import { createElement, FC } from 'react';

import './styles/input.css';

interface InputProps {
  label: string;
  type: string;
  name: string;
  handleChange: (event: any) => void;
  errorMessage: string;
  isValid: boolean;
  value: string;
}

export const Input: FC<InputProps> =
  ({
    label,
    type,
    name,
    handleChange,
    errorMessage,
    isValid,
    value
  }) => {
    return (
      <div className="inputContainer">
        <label>{label}</label>
        <input type={type} name={name} value={value} onChange={handleChange} />
        {errorMessage && !isValid && (
          <span className="error">{errorMessage}</span>
        )}
      </div>
    )

}