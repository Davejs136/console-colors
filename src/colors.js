/** All colors availables. */
const allColors = {
  black: '\x1b[30m',
  blue: '\x1b[34m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
  white: '\x1b[37m',
  yellow: '\x1b[33m',

  lightBlack: '\x1b[1;30m',
  lightBlue: '\x1b[1;34m',
  lightCyan: '\x1b[1;36m',
  lightGreen: '\x1b[1;32m',
  lightMagenta: '\x1b[1;35m',
  lightRed: '\x1b[1;31m',
  lightWhite: '\x1b[1;37m',
  lightYellow: '\x1b[1;33m'
};

/** Colors with its names. */
const colors = {
  black: 'black',
  blue: 'blue',
  cyan: 'cyan',
  green: 'green',
  magenta: 'magenta',
  purple: 'purple',
  red: 'red',
  reset: 'reset',
  white: 'white',
  yellow: 'yellow',

  lightBlack: 'lightBlack',
  lightBlue: 'lightBlue',
  lightCyan: 'lightCyan',
  lightGreen: 'lightGreen',
  lightMagenta: 'lightMagenta',
  lightRed: 'lightRed',
  lightWhite: 'lightWhite',
  lightYellow: 'lightYellow'
};

/**
 * Add color in the global colors variable
 * @param {string} name - The color name
 * @param {string} code - The code color
 */
function add(name, code) {
  const exist = check(name);

  if (!exist) {
    allColors[name] = code;
    colors[name] = name;
  } else {
    console.log(`The color "${name}" already exist`);
  }
}

/**
 * Check and return the needed value
 * @param {string} color - The color name
 * @returns {string} The color on code format
 */
function getColor(colors) {
  return colors.map(color =>
    check(color) ? allColors[color] : allColors.reset
  );
}

/**
 * Check if color exist
 * @param {string} name - The color name to check
 * @returns {boolean || string} if exist or not exist
 */
function check(name) {
  return Object.keys(allColors).find(color => (color === name ? name : false));
}

export { add, getColor, check, colors };
