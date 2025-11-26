export type User = {
  name: string;
  age: number;
  occupation: string;
};

export const user: User[] = [
  {
    name: "Hieu",
    age: 18,
    occupation: "Thai Binh",
  },
  {
    name: "Hai",
    age: 18,
    occupation: "Ha Noi",
  },
];
export function logPerson(user: User) {
  console.log(` ${user.name} -- ${user.age}`);
}
