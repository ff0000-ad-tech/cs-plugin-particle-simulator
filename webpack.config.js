const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const PATHS = {
  dist: path.resolve(__dirname, 'dist'),
  source: path.resolve(__dirname, 'source')
}


module.exports = {
  entry: path.resolve(PATHS.source, 'js/main.js'),
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\*.js/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules')
    ]
  },  
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(PATHS.source, 'index.html'),
        to: PATHS.dist,
        flatten: true
      },
      {
        from: path.resolve(PATHS.source, 'simulator_settings.json'),
        to: PATHS.dist,
        flatten: true
      },
      {
        from: path.resolve(PATHS.source, 'css/*'),
        to: PATHS.dist,
        flatten: true
      }, 
      {
        from: path.resolve(PATHS.source, 'images/*'),
        to: path.resolve(PATHS.dist, 'images'),
        flatten: true
      }
    ])
  ],
  devServer: {
    contentBase: PATHS.dist,
    compress: true,
    port: 8000
  }
}
