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
    let finded = findColor(clearBrackets(result));
    // result?.forEach((item, i) => item.replace())

    // let res = entry.split(" ").findIndex(result[0])

    // let res = entry.split(" ").map((item, i) => {
    //   return result?.map((res, i) => {
    //     if (item === res) {
    //       return finded[i]
    //     } else {
    //       return item
    //     }
    //   }).filter(item => item);
    // });

    console.log(finded);
    // console.log(entry.replace(result[0], finded[0]));
  } else if (entry.match(regexToCheckDollarNotation)) {
    console.log('Use $[color]')
  } else {
    throw new TypeError('This way is not valid!')
  }
}

function findColor(entries: Array<string> | undefined): (string | undefined)[] | undefined {
  const ready = entries?.map((entry) => colors(entry));
  return ready;
}

export function println(message: TemplateStringsArray): void {
  checkEntryType(message.join(''));
}



// print`${reset}Hola! ${blue}`;