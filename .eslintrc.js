module.exports = {
  extends: ['airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    projectFolderIgnoreList: ['/node_modules/'],
  },
  rules: {
    // turn on errors for missing imports
    "import/no-unresolved": 0
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true, 
        project: './tsconfig.eslint.json',
      }
    }
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  ignorePatterns:["server/**/*.ts",".eslintrc.js", "webpack.config.js"],
};
