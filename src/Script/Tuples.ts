const info: readonly [count: number, user: string, isAdmin: boolean] = [
  100,
  "hieu",
  true,
];
console.log(info);

// tuples type là type được xác định trước độ dài và type cho từng index cụ thể
// Không sử dụng đươc `as const ` cho Tuples
// Để Tuples chỉ đọc thì thêm từ khóa readonly ở phía trước
