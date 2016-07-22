'use strict';

var extend = require('just-extend');
var es5 = require('./es5');

module.exports = extend({}, es5, {
    'rules': {
        'no-var': ['error'],
        'prefer-template': ['error'],
        'no-dupe-class-members': ['error'],
        'no-const-assign': ['error'],
        'no-duplicate-imports': ['error', {'includeExports': true}],
        'no-useless-constructor': ['error'],
        'no-useless-rename': ['error'],
        'no-useless-computed-key': ['error'],
        'template-curly-spacing': ['error', 'never']
    }
});
