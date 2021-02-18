const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { plugins } = require("../weather-app/webpack.config")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "development",
    devServer: {
        port: 8000,
        open: true
    },
    module: {
        rules: [
            {   test: /\.(js|jsx)$/, 
                exclude: /(node_modules|bower_components)/, 
                use: { 
                    loader: 'babel-loader',
                }},
            {
                test: /\.(s*)css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  'css-loader',
                  'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/styles/[name].css"
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        })
    ]
}