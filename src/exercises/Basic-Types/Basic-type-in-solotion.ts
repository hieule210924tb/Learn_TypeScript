interface User {
  name: string;
  age: number;
  occupation: string;
}
interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: "Hai",
    age: 18,
    occupation: "Ha Noi",
  },
  {
    name: "Hieu",
    age: 18,
    role: "Admin",
  },
  {
    name: "Hai",
    age: 18,
    occupation: "Thai Binh",
  },
  {
    name: "Hai",
    age: 18,
    role: "User",
  },
];
console.log(persons);
export function logPerson(person: Person) {
  let additionalInformation: string = "";
  if ("role" in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` ${person.name} -- ${person.age} -- ${additionalInformation}`);
}
