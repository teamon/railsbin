var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var express = require('express')
var proxy   = require('express-http-proxy');
var url     = require('url');
var config  = require('./webpack.config')

var app = new express()
var port = 8080

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use('/', proxy('localhost:3000', {
  forwardPath: function(req, res) {
    return url.parse(req.url).path;
  }
}));

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
