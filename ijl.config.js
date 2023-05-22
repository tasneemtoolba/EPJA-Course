const pkg = require('./package')

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        }
    },
    navigations: {
        'meal-assist/main': '/meal-assist',
        'meal-assist': '/meal-assist',
        '/': '/meal-assist',
        'meal-assist/root': 'meal-assist',
        'cuisine/Italian': '/cuisine/Italian/',
        'cuisine/Thai': '/cuisine/Thai',
        'cuisine/American': '/cuisine/American'

    },
    features: {
        'meal-assist': {
            // add your features here in the format [featureName]: { value: string }
            
        },
    },
    config: {
        key: 'value'
    }
}
