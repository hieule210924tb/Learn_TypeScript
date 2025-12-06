const programingLanguages = {
  JAVASCRIPT: "javascript",
  PHP: "php",
  REACTJS: "reactjs",
  RUBY: "ruby",
} as const;

// dùng as const để lấy ra value, chứ không lấy ra kiểu dữ liệu

export type JavascriptLanguage = (typeof programingLanguages)["JAVASCRIPT"];
