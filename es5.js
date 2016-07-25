'use strict';

module.exports = {
    'rules': {
        'semi': ['error', 'always'],
        'no-trailing-spaces': ['error', {
            'skipBlankLines': false
        }],
        'no-console': ['error'],
        'eol-last': ['error', 'unix'],
        'linebreak-style': ['error', 'unix'],
        'no-labels': ['error'],
        'no-eval': ['error', {
            'allowIndirect': false
        }],
        'no-implied-eval': ['error'],
        'no-with': ['error'],
        'no-unreachable': ['error'],
        'use-isnan': ['error'],
        'no-debugger': ['error'],
        'no-alert': ['error'],
        'no-dupe-keys': ['error'],
        'no-redeclare': ['error'],
        'no-return-assign': ['error', 'always'],
        'no-self-assign': ['error'],
        'no-sequences': ['error'],
        'no-extra-label': ['error'],
        'no-spaced-func': ['error'],
        'valid-typeof': ['error'],
        'no-else-return': ['error'],
        'no-void': ['error'],
        'no-delete-var': ['error'],
        'no-array-constructor': ['error'],
        'operator-assignment': ['error', 'always'],
        'no-dupe-args': ['error'],
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never'
        }],
        'max-params': ['error', 5],
        'curly': ['error', 'all'],
        'keyword-spacing': ['error', {
            'before': true,
            'after': true
        }],
        'space-before-blocks': ['error', 'always'],
        'no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'none'
        }],
        'no-nested-ternary': ['error'],
        'no-unneeded-ternary': ['error'],
        'max-len': ['error', {
            'code': 150
        }]
    }
};
