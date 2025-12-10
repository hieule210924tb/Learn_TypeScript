type Check<T> = T extends string ? "string" : "non-string";
export type IsString = Check<string>; //type IsString = "string"
export type IsNonString = Check<100>; //type IsNonString = "non-string"

type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

function logObject(x: string, y: number) {
  return [x, y];
}

export type Z = Parameters<typeof logObject>;

type Extract<T, U> = T extends U ? T : never;

export type X = Extract<string | string[], string[]>; // string[]

type Exclude<T, U> = T extends U ? never : T;

export type Y = Exclude<string | string[], string[]>; //string
