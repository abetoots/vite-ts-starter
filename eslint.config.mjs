import { includeIgnoreFile } from "@eslint/compat";
import satoshiConfig from "@satoshibits/eslint-config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

/** @type {import('eslint').Linter.Config} */
export default [
  includeIgnoreFile(gitignorePath),
  ...satoshiConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          //see https://github.com/typescript-eslint/typescript-eslint/issues/9739
          allowDefaultProject: ["*.js", "*.mjs", ".lintstagedrc.mjs"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: [
      "**/__tests__/**/*.(c|m)?[jt]s",
      "**/?(*.)+(spec|test).(c|m)?[jt]s",
    ],
    rules: {
      "@typescript-eslint/no-magic-numbers": ["off"],
    },
  },
];
