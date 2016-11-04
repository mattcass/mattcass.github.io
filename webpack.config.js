var webpack = require('webpack');

module.exports = {
  entry: getEntrySources(['./src/js/app.js']),
  output: {
    publicPath: 'http://localhost:8008/',
    filename: 'build/bundle.js'
  },
  devServer: {
    inline:true,
    port: 8008
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
           'style',
           'css',
           'autoprefixer?browsers=last 3 versions',
           'sass?outputStyle=expanded'
        ]
      },
      {
         test: /\.(jpe?g|png|gif|svg)$/i,
         loaders: [
             'url?limit=8192',
             'img'
         ]
       },
       {
         test: /\.jsx?$/,
         exclude: /(node_modules|bower_components)/,
         loaders: [
             'react-hot',
             'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
         ]
       },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.md$/,
        loader: 'markdown'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};

function getEntrySources(sources) {

  if ( process.env.NODE_ENV !== 'production' ) {

    sources.push('webpack-dev-server/client?http://localhost:8008');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;

}
