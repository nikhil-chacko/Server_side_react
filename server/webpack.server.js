const path = require("path");

module.exports = {
  // webpack build bundle for node js
  target: "node",

  //Root file
  entry: "./src/index.js",

  //output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  //Run babel
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
