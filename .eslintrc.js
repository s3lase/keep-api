module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["mocha"],
  env: {
    node: true,
    mocha: true
  },
  extends: "airbnb-base",
  rules: {
    "mocha/no-exclusive-tests": "error",
    "mocha/handle-done-callback": "error",
    "no-console":"off"
  }
};
