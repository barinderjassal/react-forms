import { createFormFieldConfig } from "./form-field-config";
import { maxLengthRule, minLengthRule, passwordMatchRule, requiredRule, validEmailRule } from './validation-rules';

export const SignupFormObj = {
  name: {
    ...createFormFieldConfig('Full Name', 'name', 'text'),
    validationRules: [
      requiredRule('name'),
      minLengthRule('name', 3),
      maxLengthRule('name', 25),
    ],
  },
  email: {
    ...createFormFieldConfig('Email', 'email', 'email'),
    validationRules: [
      requiredRule('email'),
      minLengthRule('email', 10),
      maxLengthRule('email', 25),
      validEmailRule('email')
    ],
  },
  password: {
    ...createFormFieldConfig('Password', 'password', 'password'),
    validationRules: [
      requiredRule('password'),
      minLengthRule('password', 8),
      maxLengthRule('password', 20),
    ],
  },
  confirmPassword: {
    ...createFormFieldConfig('Confirm Password', 'confirmPassword', 'password'),
    validationRules: [passwordMatchRule()],
  },
};