/* eslint-env node */
'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: '@salsify/eslint-config',
  overrides: require('@salsify/eslint-config/default-overrides'),
};
