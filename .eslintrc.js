module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    "prettier"
  ],
  extends: [
    "airbnb-typescript",
    "prettier"
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "no-alert": "off"
  }
};