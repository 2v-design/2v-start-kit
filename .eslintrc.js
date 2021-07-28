module.exports = {
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parser: 'vue-eslint-parser',
  rules: {},
  globals: {
    module: 'readonly',
    require: 'readonly',
    __dirname: 'readonly',
    process: 'readonly',
    __GIT_VERSION__: 'writable',
    __VITE_APP_INFO__: 'writable'
  }
}
