/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: [],
      },
    ],
    "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": ["error"],
    // "vue/script-setup-uses-vars": "error",
  },
};
