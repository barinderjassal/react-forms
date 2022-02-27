import { createElement } from 'react';
import { Input } from '../../UI/Input';

/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */
export const createFormFieldConfig = (label: string, name: string, type: string, defaultValue = '' ) => {
  return {
    renderInput: (handleChange: any, value: string, isValid: boolean, error: string, key: string) => {
      return (
        <Input
          key={key}
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: '',
    touched: false,
  };
}
