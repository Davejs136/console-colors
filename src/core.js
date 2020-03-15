import { add, getColor, colors } from './colors';

/**
 * Clean the string deleting the "undefined" word
 * @param {string} str - The string to clean
 * @returns {string} new string modified
 */
function clean(str) {
  return str.slice(9, -1); // Delete the "undefined" word
}

/**
 * Tagged Template Literals print
 * print at the console with colors
 */
function print(strings, ...values) {
  const codes = getColor(values);

  const string = strings.reduce((combined, string, i) => {
    const color = codes[i - 1];
    return combined + color + string;
  }, '');

  console.log(clean(string));
}

export { print, add, colors };
