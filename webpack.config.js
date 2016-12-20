var webpack = require('webpack');

module.exports = {
  entry: "./client/index.js",
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333,
     proxy: {
       "/": {
         target: "http://localhost:7777",
         secure: false,
       },
    },
  },
	 plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
       {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
}
