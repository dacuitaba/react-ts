module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["import"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
