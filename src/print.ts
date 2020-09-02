import { stdout } from "process";
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

// Other way of represent the colors
// function clearDollarSign() {

// }

function clearCurlyBrackets(entries: RegExpMatchArray | null) {
  if (!entries?.length) return;
  return entries?.map((entry) => entry.slice(1, -1));
}

function checkEntryType(entry: string): string {
  if (entry.match(regexToCheckBreackets)) {
    const result: RegExpMatchArray | null = entry.match(regexToCheckBreackets);
    let codes = findColor(clearCurlyBrackets(result));
    
    let final: string = transform({
      result,
      codes, 
      content: entry
    })

    return final;

  } else if (entry.match(regexToCheckDollarNotation)) {
    // TODO
    console.log('Use $[color]')
  } else {
    throw new TypeError('This way is not valid!')
  }

  return "";
}

function findColor(entries: Array<string> | undefined) {
  if (!entries?.length) return;
  return entries?.map((entry) => colors(entry));
}

function mergeStrings(strings: TemplateStringsArray, ...args: any[]): string {
  return strings.reduce((prev, current, i) => prev + args[i - 1] + current);
}

export function println(message: TemplateStringsArray, ...args: any[]): void {
  let result: string = mergeStrings(message, args);
  stdout.write(checkEntryType(result) + "\n");
}

export function print(message: TemplateStringsArray, ...args: any[]): void {
  let result: string = mergeStrings(message, args);
  stdout.write(checkEntryType(result)); 
}