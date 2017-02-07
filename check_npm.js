import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
  'material-ui': '>=0.16.x'
}, 'zetoff:accounts-material-ui');

const MaterialUI = require('material-ui');
