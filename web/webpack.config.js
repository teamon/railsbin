var path    = require("path")
var webpack = require("webpack")
var extract = require("extract-text-webpack-plugin")

module.exports = {
  devtool: "cheap-module-source-map",
  entry: {
    app: [
      path.join(__dirname, "app/assets/javascripts/index.js"),
      path.join(__dirname, "app/assets/stylesheets/index.css")
    ],
    lib: [
      path.join(__dirname, "app/assets/javascripts/lib.js"),
      path.join(__dirname, "app/assets/stylesheets/lib.css")
    ]
  },
  output: {
    path: path.join(__dirname, "public/assets"),
    filename: "[name].js",
    publicPath: "/assets/"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("lib", "lib.js"),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new extract("[name].css")
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loader: extract.extract("style-loader", "css-loader")
      }
    ]
  }
}

if(process.env.NODE_ENV !== "production"){
  module.exports.entry.app.unshift("webpack-hot-middleware/client")
}
