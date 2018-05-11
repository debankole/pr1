var webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/main.js',
    vendors: './node_modules/angular/angular.min.js'
  },
  output: {
    filename: '[name].js'
  }
}