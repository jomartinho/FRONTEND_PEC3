const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const basePath = __dirname;

module.exports = {
  context: path.join(basePath),
  resolve: {
    alias: {
      controllers: path.resolve(__dirname, "./controllers"),
      models: path.resolve(__dirname, "./models"),
      services: path.resolve(__dirname, "./services"),
      views: path.resolve(__dirname, "./views"),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  entry: "./app.ts",
  devtool: "source-map",
  devServer: {
    static: path.join(basePath, "dist"),
    port: 8080,
    open: true,
    hot: true,
    liveReload: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]",
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(basePath, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
};
