function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePassword(length, options) {
  if (length > 200 || length < 0) {
    return '';
  }

  const lowercaseChars = 'abcdefghijklmnoqprstuvwxyz';
  const uppercaseChars = lowercaseChars.toUpperCase();
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=<>?,./[]{}|;:';

  let allowedChars = '';
  allowedChars += options.lowercase ? lowercaseChars : '';
  allowedChars += options.uppercase ? uppercaseChars : '';
  allowedChars += options.numbers ? numbers : '';
  allowedChars += options.symbols ? symbols : '';

  if (!allowedChars) {
    return '';
  }

  let result = '';
  for (let i = 0; i < length; i++) {
    result += allowedChars[generateNumber(0, allowedChars.length - 1)];
  }

  return result;
}

export { generatePassword };
