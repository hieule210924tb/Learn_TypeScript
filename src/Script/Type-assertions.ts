//as const :sẽ biến giá trị thành readonly , chỉ được đọc thôi, không được thêm sửa xóa
const scores = [1, 2, 3, 4, 5, 6] as const;
// scores.push(7) : Error
console.log(scores);
//satisfies : thì cái value sẽ giúp đánh bại cái Type
//-Khi sử dụng satisfies thì giúp code cta sẽ rõ ràng hơn, nhưng nó sẽ cố định Type luôn
// as Type : nghĩa là chúng ta đang nói dối TypeScript rằng, mày tin tao đi, tao biết m là type gì mà
//-Có thể mở rộng type ra hơn, nhưng cũng có thể gây lỗi hơn
type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
};
const newStudent = {
  id: 1,
  name: {
    firstName: "Le",
    lastName: "Hieu",
  },
} satisfies User;
console.log(newStudent);

const routes: Record<string, string> = {
  "/": "homepage",
  "/about": " About Page",
};
console.log(routes["/"]);

// Khi chúng ta sử dụng dấu : để khai báo type thì cái type nó sẽ mạnh hơn value
