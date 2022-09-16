const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {bundle: path.resolve(__dirname, 'src/index.js'), 
          imgManager: path.resolve(__dirname, 'src/manageImages.js')},
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: "development",
  // Server Config
  devServer: {
    static: {
        directory: path.resolve(__dirname, "dist")
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: "Regan Muthomi",
        filename: "index.html",
        template: "./src/template.html"
      })
  ] 
};