const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    port: 8009,
    historyApiFallback: true,
    contentBase: "dist"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react"],
              plugins: ["transform-class-properties"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {    
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      }
    ]
  }
};
module.exports = config;
