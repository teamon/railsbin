var path    = require("path")
var webpack = require("webpack")
var extract = require("extract-text-webpack-plugin")

module.exports = {
  devtool: "cheap-module-source-map",
  entry: [
    "webpack-hot-middleware/client",
    path.join(__dirname, "app/assets/javascripts/index.js"),
    path.join(__dirname, "app/assets/stylesheets/index.css")
  ],
  output: {
    path: path.join(__dirname, "public/assets"),
    filename: "[name].js",
    publicPath: "/assets/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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