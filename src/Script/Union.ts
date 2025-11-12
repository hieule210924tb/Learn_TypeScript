const information: (string | number | boolean)[] = [
  "game",
  "play football",
  "eat",
  100,
  true,
];

const students: {
  name: string;
  age: number;
  address?: string;
  gender: boolean;
  score?: number | string;
  extra?:
    | {
        name: string;
      }
    | {
        school: string;
      };
}[] = [
  {
    name: "Hieu",
    age: 21,
    gender: true,
    score: 10,
    extra: {
      name: "hieuPro",
    },
  },
  {
    name: "Hung",
    age: 21,
    address: "Thai Binh",
    gender: true,
    score: "100",
    extra: {
      name: "hieuPro1",
      school: "Ha Noi",
    },
  },
];
console.log(information);
console.log(students);
// Union type |
// Kí hiệu | : có thể có hoặc không
// Ví dụ number | string | boolean
