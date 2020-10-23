import { stdout } from "process";
import { colors } from "./colors";
import { transform } from "./transform";

const regexToCheckBreackets = /{[a-z]+}/g;

function clearCurlyBrackets(entries: RegExpMatchArray | null) {
  if (!entries?.length) return;
  return entries?.map((entry) => entry.slice(1, -1));
}

function checkEntryType(entry: string): string {

  if (!entry.match(regexToCheckBreackets)) return entry;

  const result: RegExpMatchArray | null = entry.match(regexToCheckBreackets);
  let codes = findColor(clearCurlyBrackets(result));

  let final = transform({ result, codes, content: entry });

  return final;
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