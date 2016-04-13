var path    = require("path")

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: ["style", "css"]
      }
    ]
  }
}
