import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['tsconfig.json', 'dist/']),
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.node },
    extends: [tseslint.configs.strict],
  },
  { files: ['**/*.json'], plugins: { json }, language: 'json/json' },
  { files: ['**/*.jsonc'], plugins: { json }, language: 'json/jsonc' },
  { files: ['**/*.json5'], plugins: { json }, language: 'json/json5' },
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm' },
  { files: ['**/*.css'], plugins: { css }, language: 'css/css' },
]);
