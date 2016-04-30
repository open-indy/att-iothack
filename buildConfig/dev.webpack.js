var path = require( 'path' );
var webpack = require( 'webpack' );

var config = {
  devtool: 'eval',
  entry: {
    dist: ['webpack-hot-middleware/client', './entry.js']
  },
  output: {
    path: __dirname,
    filename: 'dist.min.js',
    publicPath: '/dev/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          compact: false
        }
      },
      {
       test: /\.less$/,
       loader: "style!css!less",
       exclude: /node_modules/,
       include: __dirname
     }
    ]
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new webpack.ProvidePlugin({
      boostrap: 'bootstrap',
      $: 'jquery',
      jQuery: 'jquery',
      react: 'react',
      underscore: 'underscore'
    })
  ]
};

module.exports = config;
