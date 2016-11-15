import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
  'material-ui': '>=0.16.1'
}, 'zetoff:accounts-material-ui');

const MaterialUI = require('material-ui');
