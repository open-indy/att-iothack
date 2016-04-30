var webpack = require('webpack');
var path = require('path');
var entries = ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server'];

var config = {
  entry: {
    test: './test/test.js',
    vendor: ["jquery", "underscore", "moment", "bootstrap", "react"]
  },
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'build'),
    filename: "[name]/[name].bundle.js",
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          compact: false,
          plugins: 'babel-plugin-rewire'
        }
      }
    ]
  },
  resolve: {
    alias: {
      json2: 'json2/json2',
      'react-bootstrap/lib/modal' : 'react-bootstrap/lib/Modal',
      'react-bootstrap/lib/button' : 'react-bootstrap/lib/Button',
      'react-bootstrap/lib/alert' : 'react-bootstrap/lib/Alert',
      'react-bootstrap/lib/panelGroup' : 'react-bootstrap/lib/PanelGroup',
      'react-bootstrap/lib/panel' : 'react-bootstrap/lib/Panel',
      'react-bootstrap/lib/well' : 'react-bootstrap/lib/Well',
      'react-bootstrap/lib/modal' : 'react-bootstrap/lib/Modal',
      'react-bootstrap/lib/popover' : 'react-bootstrap/lib/Popover',
      'react-bootstrap/lib/input' : 'react-bootstrap/lib/Input',
      'react-bootstrap/lib/overlayTrigger' : 'react-bootstrap/lib/OverlayTrigger'
    },
    modulesDirectories: ['node_modules', 'bower_components', 'src', 'libs']
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      $:      "jquery",
      jQuery: "jquery",
      moment: "moment",
      underscore: "underscore",
      bootstrap: "bootstrap",
      bootstrap: "bootstrap",
      react: "react"
    })
  ]
};

module.exports = config;
