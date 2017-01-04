const DEBUG = !process.argv.includes('--release');
const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/routes.jsx`,
  resolve: {
    root: `${__dirname}/src`,
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'build.js',
    publicPath: '/',
    sourcePrefix: '  ',
  },
  plugins: [
    new webpack.IgnorePlugin(/^(buffertools)$/), // unwanted "deeper" dependency
    new webpack.IgnorePlugin(/regenerator|nodent|js\-beautify/, /ajv/),
  ],
  externals: {
    'DYMO.Label.Framework.2.0.2': 'dymo',
    SpeechRecognition: 'webkitSpeechRecognition',
    'json-schema-ref-parser': '$RefParser',
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          `${__dirname}/src`,
          `${__dirname}/dataSeeds`,
        ],
        query: {
          // https://github.com/babel/babel-loader#options
          cacheDirectory: DEBUG,

          // https://babeljs.io/docs/usage/options/
          babelrc: false,
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
          /* plugins: [
            'transform-runtime',
            ...DEBUG ? [] : [
              'transform-react-remove-prop-types',
              'transform-react-constant-elements',
              'transform-react-inline-elements',
            ],
          ],*/
        },
      },
      { test: /\.yml$/, include: `${__dirname}/schema`, loader: 'json-schema-loader' },
      { test: /\.yml$/, include: `${__dirname}/src`, loader: 'json-schema-loader' },
      { test: /\.yml$/, include: `${__dirname}/dataSeeds`, loader: 'json-schema-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader' },
    ],
  },
};
