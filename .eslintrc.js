module.exports = {
    'env': {
        'browser': true,
        'es6': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'module': 'readonly',
        'require': 'readonly',
        '__dirname': 'readonly',
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 11,
        'sourceType': 'module',
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        // We rely on Typescript to check prop types
        'react/prop-types': [0],
        'eol-last': [
            'error',
            'always',
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'functions': 'always-multiline',
            },
        ],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    },
    'settings': {
        'react': {
            'createClass': 'createReactClass', // Regex for Component Factory to use,
            // default to 'createReactClass'
            'pragma': 'React',  // Pragma to use, default to 'React'
            'version': 'detect', // React version. 'detect' automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to 'detect' in the future
            'flowVersion': '0.53', // Flow version
        },
        'propWrapperFunctions': [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            'forbidExtraProps',
            { 'property': 'freeze', 'object': 'Object' },
            { 'property': 'myFavoriteWrapper' },
        ],
        'linkComponents': [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            'Hyperlink',
            { 'name': 'Link', 'linkAttribute': 'to' },
        ],
    },
};
