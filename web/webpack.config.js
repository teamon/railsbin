var path = require("path")

module.exports = {
  entry: [
    path.join(__dirname, "app/assets/javascripts/index")
  ],
  output: {
    path: "public/assets",
    filename: "[name].js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}
