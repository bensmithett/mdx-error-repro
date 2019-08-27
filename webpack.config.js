const webpack = require('webpack')
const path = require('path')

module.exports = () => {
  return {
    entry: path.join(__dirname, './index.js'),
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.mdx$/,
          use: [
            'babel-loader',
            'mdx-loader'
          ]
        }
      ]
    },
    output: {
      filename: 'output.js'
    },
    target: 'node',
    mode: 'none'
  }
}