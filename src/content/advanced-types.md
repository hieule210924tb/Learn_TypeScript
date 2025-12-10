# Generic

- 1 cách để tạo ra code linh hoạt và tái sử dụng bằng cách cho phép chúng ta định nghĩa các
  Types mà sẽ được chỉ định sau khi viết code .Cho phép code hoạt động với nhiều loại dữ liệu khác nhau
  mà không cần viết lại types.
- Cấu trúc `<T>`

# Conditional

- Type ConditionalType = SomeType extends OtherType ? TrueType : FalseType
  -type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
  Parameters: tên ,
  T: Generic,
  (...args: any) => any: Constraint Type : nghĩa là các hàm (function) nhận vào các parameters mà chúng ta không biết là như thế nào.Và fun này trả ra giá trị gì cũng được vì nó là `any`

# Mapped

# Indexed

# Utility
