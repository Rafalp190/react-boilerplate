const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: ['file-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
module.exports = config
