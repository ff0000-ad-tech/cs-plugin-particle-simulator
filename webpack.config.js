const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: './source/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  modules: {
    resolve: ['../node_modules'],
    rules: [
      {
        test: /\*.js/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'source/css/*')
      }, 
      {
        from: path.resolve(__dirname, 'source/images/*')
      }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000
  }
}
