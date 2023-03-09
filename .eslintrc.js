module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/no-unused-vars": ["off"],//没有使用的参数，不会报错。因为个人觉的把可用的参数写上去 有利于以后的维护。
    "@typescript-eslint/no-empty-function":["off"], // 方法内部没有逻辑书写，不会报错，可以先定义好方法名，方便使用
    "@typescript-eslint/no-explicit-any":["off"], // ts 定义数据类型为any不报错
  }
}
