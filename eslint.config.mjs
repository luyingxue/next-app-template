import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals'],
    plugins: ['prettier', '@typescript-eslint', 'unused-imports'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      'prettier/prettier': 'error',
      'import/order': 'off',
      'react/jsx-sort-props': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'unused-imports/no-unused-imports': 'warn',
      '@next/next/no-img-element': 'warn'
    }
  })
]

export default eslintConfig