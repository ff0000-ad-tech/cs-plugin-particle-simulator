const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const rimraf = require('rimraf')
const dotenv = require('dotenv').config()
const isProduction = (process.env.NODE_ENV === 'production')

const TARGET_DEV_PATH = dotenv.parsed.TARGET_DEV_PATH
const PATHS = {
  dist: isProduction ? path.resolve(__dirname, 'dist') : path.resolve(TARGET_DEV_PATH, 'dist'),
  source: path.resolve(__dirname, 'source')
}

console.log(`lib from: ${path.resolve(PATHS.source, 'lib/*')}`)
console.log(`lib to: ${path.resolve(TARGET_DEV_PATH, 'lib')}`)

// TODO: move lib to under source

console.log(PATHS)
function getPlugins() {
  const plugins = []
  const copyPlugin = new CopyWebpackPlugin([
    {
      from: path.resolve(PATHS.source, 'index.html'),
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
    }, {
      from: path.resolve(PATHS.source, 'lib/*'),
      to: path.resolve(TARGET_DEV_PATH, 'lib'),
      flatten: true
    }
  ])
  plugins.push(copyPlugin)

  if (isProduction) {
    const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
      test: /\.js($|\?)/i
    })
    plugins.push(uglifyPlugin)
  }
  return plugins
}


module.exports = {
  watch: isProduction ? false : true,
  entry: path.resolve(PATHS.source, 'js/main.js'),
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(@ff0000-ad-tech)\/).*/,
        use: [{
          loader: 'babel-loader',        
          options: {
            "presets": [
              ["@babel/preset-env", {
                "loose": true
              }]
            ],
            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread']
          }
        }]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'node_modules/@ff0000-ad-tech')
    ]
  },  
  plugins: getPlugins(),
  devtool: 'cheap-source-map'
}
