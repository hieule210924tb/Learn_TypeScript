const hobbies: string[] = ["game", "play football", "eat"];
const scores: number[] = [1, 2, 3, 4];
const gender: boolean[] = [true, false];

const students: {
  name: string;
  age: number;
  address?: string;
  gender: boolean;
}[] = [
  {
    name: "Hieu",
    age: 21,
    gender: true,
  },
  {
    name: "Hung",
    age: 21,
    address: "Thai Binh",
    gender: true,
  },
];
console.log(hobbies);
console.log(scores);
console.log(gender);
console.log(students);
