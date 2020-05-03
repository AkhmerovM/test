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
    devServer: {
        contentBase: paths.lib,
        compress: true,
        port: 9000,
        hot: true
    }
};
