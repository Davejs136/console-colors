/*
  print (new) - core (older)

  import { add, getColor, colors } from './colors';

  function clean(str) {
    return str.slice(9, -1); // Delete the "undefined" word
  }

  function print(strings, ...values) {
    const codes = getColor(values);

    const string = strings.reduce((combined, string, i) => {
      const color = codes[i - 1];
      return combined + color + string;
    }, '');

    console.log(clean(string));
  }

  export { print, add, colors };
*/

import { colors } from "./colors";
import { transform } from "./helpers";

const regexToCheckDollarNotation = /\$[a-z]+/g;
const regexToCheckBreackets = /{[a-z]+}/g;

/* 
  Will there 2 forms to show the colors.

  The first way is with "$"
  The second way is putting the color between "{}"

  example:

  1) print`$red There an error! $reset`
  2) print`{red} There an error! {reset}`

  This function check which way was used, to apply
  the correct string clean.
*/

function clearDollarSign() {

}

function clearBrackets(entries: RegExpMatchArray | null): Array<string> | undefined {
  return entries?.map((entry) => entry.slice(1, -1));
}

function checkEntryType(entry: string): void {
  if (entry.match(regexToCheckBreackets)) {
    const result: RegExpMatchArray | null = entry.match(regexToCheckBreackets);
    let codes = findColor(clearBrackets(result));
    
    let final = transform({
      result,
      codes, 
      content: entry
    })

    console.log(final.trim())

  } else if (entry.match(regexToCheckDollarNotation)) {
    console.log('Use $[color]')
  } else {
    throw new TypeError('This way is not valid!')
  }
}

function findColor(entries: Array<string> | undefined): (string | undefined)[] | undefined {
  return entries?.map((entry) => colors(entry));
}

export function println(message: TemplateStringsArray): void {
  checkEntryType(message.join(''));
}



// print`${reset}Hola! ${blue}`;