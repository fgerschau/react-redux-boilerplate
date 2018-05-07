/* eslint-disable import/prefer-default-export */
export function getEmptyFields(requiredFields, values) {
  const emptyRequiredFields = {};
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!values[field]) {
      emptyRequiredFields[field] = 'This field is required';
    }
  }

  return emptyRequiredFields;
}
