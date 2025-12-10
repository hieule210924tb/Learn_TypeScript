type Check<T> = T extends string ? "string" : "non-string";
export type IsString = Check<string>; //type IsString = "string"
export type IsNonString = Check<100>; //type IsNonString = "non-string"

// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
