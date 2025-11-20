// console.log(typeof 5);
// type A ={
//   x: number
// }
// function checkTypeOf(value: number) {
//   if (typeof value === "number") {
//     return 100 + value;
//   }
//   return null;
// }
// checkTypeOf(5);

// Để khai báo 1 biến trong ts thì ta dùng từ khóa là interface or type
type A = {
  x: number;
};

type B = {
  y: string;
};

type C = A | B;

function checkInfo(info: C) {
  if ("x" in info) {
    console.log(info.x);
  }
  if ("y" in info) {
    console.log(info.y);
  }
}
// in kiểm tra một property nào đó có tồn tại bên trong object hay không ? Phù hợp khi kiểm tra với Union Type |
