import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    ignores: ["dist/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "semi": ["error", "always"],
      "no-unused-vars": "warn",
      "eqeqeq": ["error", "always"],
      "no-console": "off",
    },
  },
  pluginReact.configs.flat.recommended,
];
