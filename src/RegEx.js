export const passwordRegEx =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/;

export const usernameRegEx = /^[a-zA-Z0-9]{5,30}$/;

export const emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,}$/i;

export const usernameRequirements = [
  '5-30 characters',
  'Alphanumeric only (letters and digits)',
  'No special characters or spaces',
];

export const passwordRequirements = [
  'At least 8 characters',
  'At least 1 number',
  'At least 1 lowercase letter',
  'At least 1 uppercase letter',
  'At least 1 special character',
];
