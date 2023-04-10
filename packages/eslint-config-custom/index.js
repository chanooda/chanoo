module.exports = {
  env: {
    node: true
  },
  extends: [
    'turbo',
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 함수 인자 하나일 때 () 감쌀지 말지
    'arrow-parens': [2, 'always'],
    // 다시 내보내기 할 때 default export 하는 방식
    'no-restricted-exports': ['error', { restrictDefaultExports: { defaultFrom: false } }],
    // import 할때 확장자 안붙히게
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    '@next/next/no-html-link-for-pages': 'off',
    // jsx 문법을 사용할 수 있는 파일 확장명
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    // jsx 문법 사용시에 react import
    'react/react-in-jsx-scope': 'off',
    // 내보내는게 하나일 때 export default 사용하기
    'import/prefer-default-export': 'off',
    // react props 정렬 설정
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: false,
        multiline: 'last'
      }
    ],
    // devDependencies module import 가능하게
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.config.ts']
      }
    ],
    // jsx key 체크
    'react/jsx-key': [
      2,
      { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true }
    ]
  },
  parserOptions: {
    babelOptions: { presets: [require.resolve('next/babel')] },
    project: ['tsconfig.json']
  },

  ignorePatterns: ['.eslintrc.js', '**/*.config.*']
};
