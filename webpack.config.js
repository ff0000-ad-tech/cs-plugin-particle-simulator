const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isProduction = (process.env.NODE_ENV === 'production')

const PATHS = {
  dist: path.resolve(__dirname, 'dist'),
  source: path.resolve(__dirname, 'source')
}

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
    }
  ])
  plugins.push(copyPlugin)

  // if (isProduction) {
  //   const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  //     test: /\.js($|\?)/i
  //   })
  //   plugins.push(uglifyPlugin)
  // }
  return plugins
}


module.exports = {
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
        exclude: /node_modules\/(?!(@ff0000-ad-tech|ad-events|ad-geom)\/).*/,
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
  devServer: {
    contentBase: PATHS.dist,
    compress: true,
    inline: true,
    port: 8000
  },
  devtool: 'cheap-source-map'
}
