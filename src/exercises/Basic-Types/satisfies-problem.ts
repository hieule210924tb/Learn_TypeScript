type personName = "John" | "Jack" | "Justin";
type otherDetails = {
  id: number;
  age: number;
};
type personInfo = personName | otherDetails;

type Person = {
  myInfo: personInfo;
  myOtherInfo: personInfo;
};
// const applicant : Person = {
//     myInfo :"John",
//     myOtherInfo :{
//         id : 1,
//         age :18
//     }
// }
const applicant = {
  myInfo: "John",
  myOtherInfo: {
    id: 1,
    age: 18,
  },
} satisfies Person;
applicant.myInfo.toUpperCase();
