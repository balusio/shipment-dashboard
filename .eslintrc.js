module.exports = {
  extends: ['airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    projectFolderIgnoreList: ['/node_modules/'],
  },
  rules: {
    // turn on errors for missing imports
    "import/no-unresolved": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-one-expression-per-line": 0, 
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true, 
        project: './tsconfig.json',
      }
    }
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  ignorePatterns:["server/**/*.ts",".eslintrc.js", "webpack.config.js"],
};
