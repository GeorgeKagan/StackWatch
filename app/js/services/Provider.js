angular.module('stackWatch').factory('Provider', () => {
    let provider = {};

    provider.getCountryList = () => {
        return [
            {
                name: 'USA',
                flag: 'united states'
            },
            {
                name: 'Israel (coming soon...)',
                flag: 'israel',
                disabled: true
            }
        ];
    }

    provider.getProviderList = () => {
        return ['Indeed'];
    };

    return provider;
});