/**
 * @note: only rules which start with ^@typescript-eslint/
 */
module.exports = {
    '@typescript-eslint/no-useless-constructor': 'off', // todo: why 'off'?
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/member-ordering': [
        'error',
        {
            default: [
                'signature',
                /** private instance/static fields **/
                'private-instance-field',
                'private-static-field',
                'private-decorated-field',
                'private-abstract-field',
                /** protected instance/static fields **/
                'protected-static-field',
                'protected-instance-field',
                'protected-decorated-field',
                'protected-abstract-field',
                /** public instance/static fields **/
                'public-instance-field',
                'public-static-field',
                'public-decorated-field',
                'public-abstract-field',
                /** constructors **/
                'public-constructor',
                'protected-constructor',
                'private-constructor',
                /** public instance getters/setters **/
                // 'public-instance-get', todo: require @typescript-eslint v5
                // 'public-decorated-get', todo: require @typescript-eslint v5
                // 'public-instance-set',  todo: require @typescript-eslint v5
                // 'public-decorated-set', todo: require @typescript-eslint v5
                // 'public-static-get', todo: require @typescript-eslint v5
                // 'public-static-set', todo: require @typescript-eslint v5
                // 'public-abstract-get', todo: require @typescript-eslint v5
                // 'public-abstract-set', todo: require @typescript-eslint v5
                /** protected instance getters/setters **/
                // 'protected-instance-get', todo: require @typescript-eslint v5
                // 'protected-decorated-get', todo: require @typescript-eslint v5
                // 'protected-instance-set', todo: require @typescript-eslint v5
                // 'protected-decorated-set', todo: require @typescript-eslint v5
                // 'protected-static-get', todo: require @typescript-eslint v5
                // 'protected-static-set', todo: require @typescript-eslint v5
                // 'protected-abstract-get', todo: require @typescript-eslint v5
                // 'protected-abstract-set', todo: require @typescript-eslint v5
                /** private instance getters/setters **/
                // 'private-instance-get', todo: require @typescript-eslint v5
                // 'private-decorated-get', todo: require @typescript-eslint v5
                // 'private-instance-set', todo: require @typescript-eslint v5
                // 'private-decorated-set', todo: require @typescript-eslint v5
                // 'private-static-get', todo: require @typescript-eslint v5
                // 'private-static-set', todo: require @typescript-eslint v5
                // 'private-abstract-get', todo: require @typescript-eslint v5
                // 'private-abstract-set', todo: require @typescript-eslint v5
                /** static methods **/
                'public-static-method',
                'protected-static-method',
                'private-static-method',
                /** decorated instance method **/
                'public-decorated-method',
                'protected-decorated-method',
                'private-decorated-method',
                /** instance method **/
                'public-instance-method',
                'protected-instance-method',
                'private-instance-method',
                /** abstract instance method **/
                'public-abstract-method',
                'protected-abstract-method',
                'private-abstract-method',
            ],
        },
    ],
};
