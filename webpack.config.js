var webpack = require('webpack');
require('es6-promise').polyfill();
var publicPath = "http://localhost:8080/";
var entry = [
  "./src/js/app.js",
  'webpack-dev-server/client?http://0.0.0.0:8080',
  'webpack/hot/only-dev-server'
];

module.exports = {
    entry: entry,
    output: {
        path: "htdocs/",
        publicPath: publicPath,
        filename: "./js/app.js"
    },
    module: {
        loaders: [
          {
            test: /\.css$/,
            loader: "style!css"
          },
          {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          },
          {
            test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader : 'file-loader'
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file-loader'
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-2,presets[]=react'],
            include: __dirname
          },
          {
            test: /materialize-css\/bin\//,
            loader: 'imports?jQuery=jquery,$=jquery,hammerjs'
          }
        ]
    },
    plugins:[
      // new webpack.optimize.UglifyJsPlugin({
      //   exclude: /node_modules/,
      //   compress: { warnings: false }
      // })
    ]
};
