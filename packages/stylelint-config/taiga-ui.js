module.exports = {
    customSyntax: 'postcss-less',
    extends: ['./stylelint.config.js', 'stylelint-config-prettier', './angular.js'],
    rules: {
        'order/properties-order': [
            [
                'content',
                'position',
                {
                    order: 'flexible',
                    properties: ['top', 'left', 'right', 'bottom'],
                },
                'z-index',
                'display',
            ],
            {
                unspecified: 'bottom',
            },
        ],
        'order/order': [
            'less-mixins',
            'custom-properties',
            'dollar-variables',
            'declarations',
            'rules',
            'at-rules',
        ],
        indentation: null,
        'color-named': null,
        'at-rule-no-unknown': null,
        'max-line-length': null,
        'number-leading-zero': null,
        'selector-class-pattern': null,
        'number-max-precision': null,
        'property-no-vendor-prefix': null,
        'keyframes-name-pattern': null,
        'media-feature-name-no-vendor-prefix': null,
        'color-function-notation': 'legacy',
        'alpha-value-notation': 'number',
        'selector-max-specificity': [
            '0,5,0',
            {
                ignoreSelectors: [':host-context', ':first-child'],
            },
        ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['ng-deep'],
            },
        ],
    },
};
