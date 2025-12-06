const complexObj = {
  javascript: {
    label: "JavaScript",
  },
  typescript: {
    label: "TypeScript",
  },
  reactJs: {
    label: "reactJs",
  },
};

type ComplexObj = typeof complexObj;

type ComplexObjKeys = keyof ComplexObj;

//Kết quả mong muốn : type ComplexObjKeys = "reactJs" | "javascript" | "typescript"

//-Keyof chỉ sử dụng được cho Type
//-Nếu muốn sử dụng cho biến thì biến đó phải có typeof trước
export {};
