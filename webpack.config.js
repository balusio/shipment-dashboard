const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  target: 'web',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: "[name].js.map"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      containers: path.resolve(__dirname, 'src/containers/'),
      components: path.resolve(__dirname, 'src/components/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/, /server/],
        use: ["ts-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }), 
  ]
};
