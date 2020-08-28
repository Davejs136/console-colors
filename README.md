# Console colors :tada:
Easiest way to print colors on the console. 

inspired by: [chalk](https://github.com/chalk/chalk)

## Available colours :art:
- `reset`
- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`

## Install :rocket:

Using npm:

```bash
$ npm install console-colors -D
```

Using yarn:
```bash
$ yarn add console-colors -D
```

## Usage
Import console-colors in your file. Just write down the needed color into curly brackets and console-colors does all for you :muscle:

```javascript
const { println, print } = require("console-colors")

const name = "Dave"

// This function prints with a line break
println`{cyan}Hi! Welcome to my cool program{reset}`

// This function prints without a line break
print`{magenta}Without line break :)`

// You can also use interpolations
println`{green}Your name is: ${name}{reset}`
```

## Features
- [x] Best usage mode
- [x] Basic colors
- [x] Support variables in tagged literals
- [ ] Bright colors
- [ ] Light colors
- [ ] Background colors
- [ ] Font mode (bold, italic)
- [ ] RGB support
