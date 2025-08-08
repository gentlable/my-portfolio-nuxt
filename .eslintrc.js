module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Windows の CRLF を許容
    'linebreak-style': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // 既存コードに合わせて lint 厳しさを調整
    'require-await': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
}

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
  }
}
