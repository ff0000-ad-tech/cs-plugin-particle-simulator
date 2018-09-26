const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const dotenv = require('dotenv').config()
const isProduction = (process.env.NODE_ENV === 'production')

const TARGET_DEV_PATH = dotenv.parsed.TARGET_DEV_PATH
const PATHS = {
  dist: isProduction ? path.resolve(__dirname, 'dist') : path.resolve(TARGET_DEV_PATH, 'dist'),
  source: path.resolve(__dirname, 'source')
}

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
      to: path.resolve(PATHS.dist, 'lib'),
      flatten: true
    }
  ])
  plugins.push(copyPlugin)

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
  plugins: [
    new CopyWebpackPlugin([
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
        to: path.resolve(PATHS.dist, 'lib'),
        flatten: true
      }
    ])
  ],
  devtool: 'cheap-source-map'
}
