import { println, print } from './print';

const msg = "finally doit";

// Showing basic colors
println`{cyan}This is my other message{reset}`;
println`{green}success: {magenta}Intl-graphl{reset}`;

// TODO: Interpolation support
const lang: string = 'en';

println`{green}sucess: {white}plugin intl-graphql for {red}${2+2}{white} languages {yellow}"${lang}"{reset}`;

console.log("");