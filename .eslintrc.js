module.exports = {
  parser: "babel-eslint",
  extends: "standard",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    "max-len": ["error", 120, 2],
    singleQuote: true,
    'import/prefer-default-export': 0,
    'react/jsx-key': 2,
    'no-nested-ternary': 'off',
    'react/no-unused-prop-types': 2,
    'react/jsx-uses-vars': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    "import/prefer-default-export": 0,
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "react/jsx-tag-spacing": [
      2,
      {
        "beforeSelfClosing": "always"
      }
    ]
  },
  plugins: [
    "react",
    "react-native",
    "import",
  ]
};
