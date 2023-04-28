module.exports = {
  extends: ['eslint-config-trpi/packages/eslint-config-vue'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'indent': ['error', 2],
    'semi': ['error', 'never'],
  },
}
