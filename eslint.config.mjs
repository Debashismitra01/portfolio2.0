import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    parserOptions: {
      project: "./tsconfig.json", // Ensure TypeScript is properly parsed
    },
    rules: {
      "no-console": "warn", // Custom rule to warn about console usage
      "react/prop-types": "off", // Disable prop-types rule if using TypeScript
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignore unused variables with _ prefix
    },
  },
];

export default eslintConfig;
