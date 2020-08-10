var path = require('path');
let paths = {
    main: path.join(__dirname),
    lib: path.join(__dirname, 'lib'),
    src: path.join(__dirname, 'src')
};
module.exports = {
    context: paths.src,
    entry: './index.js',
    output: {
        filename: '[name].min.js',
        path: paths.lib,
    },
    module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ["@babel/preset-env"]
                  }
              }
          }
      ]
    },
    devServer: {
        contentBase: paths.lib,
        compress: true,
        port: 9001,
        hot: true
    }
};
