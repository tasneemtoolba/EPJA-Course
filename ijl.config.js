const pkg = require('./package')

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        }
    },
    navigations: {
        'cuisine.root': '/meal-assist',
        'cuisine.recipe': '/meal-assist/recipe/:id',
        'cuising.search': '/meal-assist/searched/:search',
        'cuisine.cuisine': '/meal-assist/cuisine/:type',
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
