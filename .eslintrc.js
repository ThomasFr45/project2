module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 1
  }
};
