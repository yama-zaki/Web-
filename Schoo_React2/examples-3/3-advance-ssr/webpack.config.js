/**
 * webpackを実行すると、
 * src/client.jsを起点にstatic/client.bundle.jsを出力する
 */
module.exports = {
  entry: {
    client: ['isomorphic-fetch', './src/client.js'],
  },
  output: {
    path: __dirname + '/static',
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },
};
