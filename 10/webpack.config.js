const path = require('path');
const MinifyBundledPlugin = require('minify-bundled-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    plugins: [
        new MinifyBundledPlugin({
            patterns: ['(json|css|js)'],
        }),
    ]
};