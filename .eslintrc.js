module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["mocha", "prettier"],
  env: {
    node: true,
    mocha: true
  },
  rules: {
    extends: "airbnb-base",
    "mocha/no-exclusive-tests": "error",
    "mocha/handle-done-callback": "error"
    // "prettier/prettier": "error"
  }
};
