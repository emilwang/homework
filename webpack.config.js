var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './homework/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /(\.jsx|\.js)$/,
      loaders: ['babel?presets[]=es2016&presets[]=react'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'source-map',
};