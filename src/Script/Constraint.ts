const student = {
  name: "Hieu",
  age: 14,
  school: "MDC",
};
type Student = typeof student;
type StudentKey = keyof Student;
function logObjValue<O extends object, K extends keyof O>(
  obj: O,
  key: K
): void {
  console.log(obj[key]);
}

logObjValue(student, "name");
//Khi sử dụng từ khóa `extends` trong Generic Type thì nó được dùng để áp đặt ràng buộc (constraint)
// trên kiểu dữ liệu generic mà chúng ta dùng, giới hạn kiểu con mà chúng ta có thể dùng cho tham số
// generic cụ thể.

//Giúp kiểm soát và định rõ nhừng ràng buộc về kiểu dữ liệu, giueps TypeScript kiểm tra kiểu dữ liệu
// tốt hơn và nó cung cấp các gợi ý , cũng như thông báo lỗi có sai sót khi sử dụng.
