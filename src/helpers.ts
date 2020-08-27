interface IContent {
  result: RegExpMatchArray | null;
  codes: any;
  content: string;
}

export function transform(ctx: IContent): string {
  let { content, codes, result } = ctx;
  // Variable to save the current string
  let output: string[] = [];

  // Replacing all items of array in each iteration
  result?.forEach((item, i) => {
    let temp = content.replace(item, codes[i])

    if (!output.length) {
      output.push(temp)
    } else {
      output[0] = output[0].replace(item, codes[i]) 
    }

  })

  return output.toString();
}