module.exports = {
    env: {
        node: true
    },
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        'for-direction':                 ['error', { allowImplicit: false }],
        'getter-return':                 ['error'],
        'no-async-promise-executor':     ['warn'],
        'no-await-in-loop':              ['warn'],
        'no-compare-neg-zero':           ['error'],
        'no-cond-assign':                ['warn', 'except-parens'],
        'no-constant-condition':         ['error', { checkLoops: true }],
        'no-control-regex':              ['error'],
        'no-debugger':                   ['error'],
        'no-dupe-args':                  ['error'],
        'no-dupe-else-if':               ['error'],
        'no-dupe-keys':                  ['error'],
        'no-duplicate-case':             ['error'],
        'no-empty':                      ['warn', { allowEmptyCatch: true }],
        'no-empty-character-class':      ['error'],
        'no-ex-assign':                  ['error'],
        'no-extra-boolean-cast':         ['error', { enforceForLogicalOperands: true }],
        'no-extra-parens':               ['warn', 'all'],
        'no-extra-semi':                 ['error'],
        'no-func-assign':                ['error'],
        'no-import-assign':              ['error'],
        'no-inner-declarations':         ['off'],
        'no-invalid-regexp':             ['error', { allowConstructorFlags: ['u', 'y'] }],
        'no-irregular-whitespace':       ['error', { skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true }],
        'no-loss-of-precision':          ['error'],
        'no-misleading-character-class': ['error'],
        'no-obj-calls':                  ['error'],
        'no-promise-executor-return':    ['error'],
        'no-prototype-builtins':         ['error'] // PAUSED
    }
};