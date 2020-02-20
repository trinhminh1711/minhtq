const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var path = require('path');

const webpack = require('webpack'); 
module.exports = {

  devServer: {

    compress: true,
    port: 8888
  },

  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
      
      {
        test:/\.scss$/,
        use:[
         "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
      
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),


  ]
};
