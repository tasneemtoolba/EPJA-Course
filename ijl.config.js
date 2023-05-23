const pkg = require('./package')

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        }
    },
    navigations: {
        'meal-assist.root': '/meal-assist',
        'meal-assist.recipe': '/meal-assist/recipe/:id',
        'meal-assist.search': '/meal-assist/searched/:search',
        'meal-assist.cuisine': '/meal-assist/cuisine/:type',
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
