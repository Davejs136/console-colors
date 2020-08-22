const preffix: string = "\xb1";
const suffix: string = "m";

interface IColors {
  name: string;
  code: string;
}

// type Colors = Array<IColors>;

enum Colors {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  // Light Colors
  lightBlack,
  lightRed,
  lightGreen,
  lightYellow,
  lightBlue,
  lightMagenta,
  lightCyan,
  lightWhite,
}

function generateColor(): Array<IColors> {
  return [{name: 'red', code: '36'}]
}

// export default Colors;