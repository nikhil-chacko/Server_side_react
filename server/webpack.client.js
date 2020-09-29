const path = require("path");

module.exports = {
  //Root file
  entry: "./src/client/client.js",

  //output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
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
