import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
// import tailwindcss from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const customRules = {
  rules: {
    semi: ['warn', 'always'],
    quotes: ['warn', 'single', { avoidEscape: true }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        warnOnUnassignedImports: true,
        'newlines-between': 'never'
      }
    ]
  }
};

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    // 'plugin:tailwindcss/recommended',
    'prettier'
  ),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts']
  },
  // {
  //   plugins: { tailwindcss },
  //   settings: {
  //     tailwindcss: {
  //       config: './tailwind.config.ts'
  //     }
  //   }
  // },
  customRules
];

export default eslintConfig;
