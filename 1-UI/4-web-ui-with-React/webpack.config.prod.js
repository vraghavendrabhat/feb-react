

const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
        ],
      },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};