var path = require( 'path' );
var webpack = require( 'webpack' );

var config = {
  devtool: 'sourcemaps',
  entry: {
    dist: './entry.js',
    vendor: [ 'bootstrap', 'jquery', 'react', 'underscore' ]
  },
  output: {
    path: __dirname,
    filename: '../public/dist/dist.min.js',
    publicPath: '/'
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
    new webpack.optimize.CommonsChunkPlugin( 'vendor', '../public/dist/vendor.min.js' ),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.DedupePlugin(),
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
