const info: {
  name: string;
  age: number;
  address?: string;
  gender: boolean;
} = {
  name: "Hieu",
  age: 21,
  gender: true,
};
console.log(info);
//Dấu ? nằm sau property nghĩa là optional (không bắt buộc)
// {} là một type đặc biệt trong TypeScript , nó chưa tất cả các giá trị ngoài trừ null và underfined và không nên dùng khi khai báo cho các giá trị
// Khi làm việc với obj thì nên khai báo rõ ràng hoặc dùng Record<string, any>
