'use strict';

module.exports = {
    extends: ['./es5.js'],
    rules: {
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
};
