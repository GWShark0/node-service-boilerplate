module.exports = {
  extends: 'airbnb-base',
  rules: {
    // ignore 'next' argument used by express middleware
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
