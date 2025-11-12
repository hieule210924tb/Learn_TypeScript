const students: {
  name: string;
  age: number;
  address?: string;
  gender: boolean;
  score?: number | string;
  extra?: {
    name: string;
  } & {
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
      school: "Ha Noi 1",
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

console.log(students);
//Intersection Type
// Kí hiệu & ( giống như và &&, bắt buộc phải có hết)
