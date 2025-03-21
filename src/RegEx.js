export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/;

export const usernameRegEx = /^[a-z0-9]{10,30}$/i;

export const emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/i;

export const usernameRequirements = [
  '10-30 characters',
  'Alphanumeric only',
  'At least 1 letter',
  'Lowercase, uppercase, digits only',
];

export const passwordRequirements = [
  'At least 8 characters',
  'At least 1 number',
  'At least 1 lowercase letter',
  'At least 1 uppercase letter',
  'At least 1 special character',
];
