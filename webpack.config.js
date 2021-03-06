const path = require("path")

module.exports = {
    entry: {
        bundle: [
            path.resolve('./src/js/index.js'),
            path.resolve('./src/js/sample.js')
        ]
    },
    output: {
        path: path.resolve("./dist/views/js"),
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ],
    }
}