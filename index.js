/* 
  Colors, is a small functionality to add colors in the message console,
  this subdivide in "normal" colors and "light" colors

  the light colors is present as for example "l-blue"
  The preffix "l" indicate the light colors

  // Effects:

  // const Bright = "\x1b[1m"
  // const Dim = "\x1b[2m"
  // const Underscore = "\x1b[4m"
  // const Blink = "\x1b[5m"
  // const Reverse = "\x1b[7m"
  // const Hidden = "\x1b[8m"

*/
const allColors = {
  normal: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  },
  light: {
    lightBlack: "\x1b[1;30m",
    lightRed: "\x1b[1;31m",
    lightGreen: "\x1b[1;32m",
    lightYellow: "\x1b[1;33m",
    lightBlue: "\x1b[1;34m",
    lightMagenta: "\x1b[1;35m",
    lightCyan: "\x1b[1;36m",
    lightWhite: "\x1b[1;37m",
  }
}

const reset = "\x1b[0m"


// Check if the color exist
function comprobate(color) {
  if (color.includes('-')) {
    const real = color.split('-')[1]
    const upper = real.split('')[0].toUpperCase()
    const final = real.replace(real[0], upper)

    let name = null
    
    for (const x in allColors.light) {
      if (x.includes(final)) {
        name = x
        break
      } 
    }

    return allColors.light[name]

  } else {
    let name = null
    
    for (const x in allColors.normal) {
      if (x.includes(color)) {
        name = x
        break
      }
    }

    return allColors.normal[name]
  }
}

function print(color, color2 = null, message, message2, optional) {
  const color_1 = comprobate(color)
  const color_2 = color2 && message2 ? comprobate(color2) : null
  if (!color_1) {
    throw new Error(`Error!: color "${color}" doesn't exist`)
  } 

  if (color_2) {
    return console.log(`${color_1}%s ${color_2}%s${reset}`, message, message2, optional)
  }

  // The code after %s reset the color
  console.log(`${color_1}%s${reset}`, message, optional)
}

module.exports = { print }