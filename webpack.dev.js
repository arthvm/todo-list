const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./src",
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  optimization: {
    runtimeChunk: "single",
  },
});
