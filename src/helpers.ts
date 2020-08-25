interface IContent {
  result: RegExpMatchArray | null;
  codes: any;
  content: string;
}

export function transform(ctx: IContent): string {
  let { content, codes, result } = ctx;
  // Divide the string and transform it into an array
  const isolated: string[] = content.split(" ");

  result?.forEach((item, i) => {
    let index: number = isolated.findIndex(el => el === item)
    isolated.splice(index, 1, codes[i])
  })

  console.log(isolated)

  return isolated.join(' ');
}