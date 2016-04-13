var path    = require("path")
var webpack = require("webpack")

module.exports = {
  devtool: "cheap-module-eval-source-map",
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
    new webpack.HotModuleReplacementPlugin()
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
        loaders: ["style", "css"]
      }
    ]
  }
}
