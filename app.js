"use strict";

var _ = require('underscore');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compress = require('compression');
var express = require('express');
var http = require('http');
var methodOverride = require('method-override');
var morgan = require('morgan');
var path = require('path');
var url = require('url');
var csurf = require('csurf');
var jwt = require('express-jwt');
var app = module.exports = express();

// CSurf Protection
var csrfProtection = csurf({ cookie: true });

// Session management
app.use(cookieParser('s33kret'));
app.use( express.cookieSession());

var jwtCheck = jwt({
  secret: new Buffer('uNG4xxzSgVdZEm3djQPB89zSUoyfJJYIAShxz_A5MAmud0sBAfM2DniVih01FAT_', 'base64'),
  audience: 'Xthzjd4cUR3yKekb0zP6RMGLsgrk7lgq'
});

//Webpack Dev Build
if(process.env.NODE_ENV === 'dev') {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('./buildConfig/dev.webpack');

  console.log('Running in DEV mode...');

  //webpack-dev-middleware && hot reloading
  var compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler));

  //Routes
  app.get('/', csrfProtection, function (req, res) {
    res.render( 'dev', {
      cToken: req.csrfToken()
    });
  });
}

app.set('views', path.join( __dirname, 'views' ));
app.set('view engine', 'jade');
app.use(express.static( path.join( __dirname, 'public' ) ));
app.set('port', process.env.PORT || 3000);

app.use(function( req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(compress());
app.use(morgan('dev'));

// Add API routes here

app.get('/', csrfProtection, function(req, res) {
  res.render('index', {
    cToken: req.csrfToken()
  });
});

var webpack = require('webpack');
var webpackConfig = require('./buildconfigs/dev.config');
var compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

http.createServer(app).listen(app.get('port'));
console.log('Express DEV server listening on port %d with NODE_ENV=%s', app.get('port'), 'dev');
