var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'yeti');
var APP_DIR = path.resolve(__dirname, 'src');


module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		APP_DIR + '/yeti_index.js' // Your appʼs entry point
	],
  output: {
    filename: 'yeti_bundle.js',
    path: path.resolve(__dirname, 'yeti')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'es2015', 'react' ] }
        
      },
      {
            test: /\.css$/,
            loader: 'style-loader'
      },
      {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
            }
      }
    ]
  },
  resolve: {
        extensions: ['jsx', '.js','.css']
		
  },
  devServer: {
        contentBase: './yeti',
        hot: true
   },
   plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};