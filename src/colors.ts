/* 
  data of older "color.js"

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

*/

const preffix: string = "\x1b";
const suffix:  string = "m";
const light:   string = "1;";

enum Colors {
  reset          = "0",
  black          = "30",
  red            = "31",
  green          = "32",
  yellow         = "33",
  blue           = "34",
  magenta        = "35",
  cyan           = "36",
  white          = "37",
  // Bright Colors
  brightBlack    = "90",
  brightRed      = "91",
  brightGreen    = "92",
  brightYellow   = "93",
  brightBlue     = "94",
  brightMagenta  = "95",
  brightCyan     = "96",
  brightWhite    = "97",
};

type ColorMap = Map<string, string>;

// get a color
function generateColor(): ColorMap {
  const color: ColorMap = new Map();

  // Basic Colors
  color.set('reset',   Colors.reset);
  color.set('black',   Colors.black);
  color.set('red',     Colors.red);
  color.set('green',   Colors.green);
  color.set('yellow',  Colors.yellow);
  color.set('blue',    Colors.blue);
  color.set('magenta', Colors.magenta);
  color.set('cyan',    Colors.cyan);
  color.set('white',   Colors.white);
  // Bright Colors

  return color;
}

export function exist(name: string): boolean {
  const color: ColorMap = generateColor();

  return color.has(name);
}

//  black: '\x1b[30m',

function join(code: string | undefined): string {
  return `\x1b[${code}${suffix}`;
}

// Adding preffix and suffix
export function colors(name: string): string | undefined {
  const color: ColorMap = generateColor();

  if (color.has(name)) {
    return join(color.get(name));
  }
  // console.log(color.get(name));
  
  // return "";
}
// export default Colors;