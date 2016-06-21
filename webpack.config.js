module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
}
