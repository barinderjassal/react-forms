/**
 * creates and returns a validation rule object that
 * is used by useForm hook to validate the form inputs
 *
 * @param {string} ruleName - name of the validation rule
 * @param {string} errorMessage - message to display
 * @param {function} validateFunc - validation function
 */
const createValidationRule = (
  ruleName: string,
  errorMessage: string,
  validateFunc: (inputValue: string, formObj?: any) => void
) => {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc,
  };
}

export const requiredRule = (inputName: string) => {
  return createValidationRule(
    'required',
    `${inputName} required`,
    (inputValue) => inputValue.length !== 0
  );
}

export const minLengthRule = (inputName: string, minCharacters: number) => {
  return createValidationRule(
    'minLength',
    `${inputName} should contain atleast ${minCharacters} characters`,
    (inputValue, formObj) => inputValue.length >= minCharacters
  );
}

export const maxLengthRule = (inputName: string, maxCharacters: number) => {
  return createValidationRule(
    'maxLength',
    `${inputName} cannot contain more than ${maxCharacters} characters`,
    (inputValue, formObj) => inputValue.length <= maxCharacters
  );
}

export const validEmailRule = (inputName: string) => {
  return createValidationRule(
    'vaildEmail',
    `Please enter a valid ${inputName}`,
    (inputValue, formObj) => inputValue.trim().includes('@')
  );
}

export const passwordMatchRule = () => {
  return createValidationRule(
    'passwordMatch',
    `passwords do not match`,
    (inputValue, formObj) => inputValue === formObj.password.value
  );
}
