const path = require('path');
const webpack = require('webpack');
const nodeFlag = require('node-flag');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const DEBUG = nodeFlag.get('mode') !== 'production';

const config = {
  entry: {
    'sked-tape': './src/main.ts'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  output: {
    library: 'SkedTape',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  externals: {
    'lodash/clone': {
      commonjs: 'lodash/clone',
      commonjs2: 'lodash/clone',
      amd: 'lodash/clone',
      root: ['_', 'clone'],
    },
    'lodash/cloneDeep': {
      commonjs: 'lodash/cloneDeep',
      commonjs2: 'lodash/cloneDeep',
      amd: 'lodash/cloneDeep',
      root: ['_', 'cloneDeep'],
    },
    'lodash/difference': {
      commonjs: 'lodash/difference',
      commonjs2: 'lodash/difference',
      amd: 'lodash/difference',
      root: ['_', 'difference'],
    },
    'lodash/intersection': {
      commonjs: 'lodash/intersection',
      commonjs2: 'lodash/intersection',
      amd: 'lodash/intersection',
      root: ['_', 'intersection'],
    },
    'lodash/omit': {
      commonjs: 'lodash/omit',
      commonjs2: 'lodash/omit',
      amd: 'lodash/omit',
      root: ['_', 'omit'],
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      // Support for *.css files. Returns file content as string.
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // Interprets @import and @url() and resolves them.
          {
            loader: 'css-loader',
            options: {
              // how many loaders before css-loader should be
              // applied to @imported resources
              importLoaders: /*1*/0,
              sourceMap: true,
            },
          },
          // Required packages: postcss-loader
          //{ loader: 'postcss-loader', options: { sourceMap: true } }
        ],
      },
      // Support for *.scss files. Returns file content as string.
      {
        test: /\.s[ca]ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // Interprets @import and @url() and resolves them.
          {
            loader: 'css-loader',
            options: {
              // how many loaders before css-loader should be
              // applied to @imported resources
              importLoaders: 1,
            },
          },
          // A loader for Webpack for compiling SCSS/Sass files.
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          // Required packages: postcss-loader
          //{ loader: 'postcss-loader', options: { sourceMap: true } }
        ]
      },
      // File loader for supporting images, for example, in CSS files.
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
            limit: 4096,
            outputPath: './images/generated/'
          },
        }],
      },
      // File loader for supporting fonts, for example, in CSS files.
      {
        test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
            limit: 4096,
            outputPath: './fonts/'
          },
        }],
      },
    ],
  },
  plugins: [
    new WebpackBundleSizeAnalyzerPlugin('../reports/browser-bundle.txt'),
    new MiniCssExtractPlugin({
      filename: 'sked-tape.css',
      chunkFilename: '[name].css',
    }),
    new FileManagerPlugin({
      onEnd: {
        copy: [{
          source: './dist/*.*',
          destination: './docs/',
        }],
      },
    }),
  ],
};

if (DEBUG) {
  module.exports = {
    ...config,
    mode: 'development',
    devtool: 'source-map',
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
    devServer: {
      contentBase: [
        path.join(__dirname, 'docs'),
        path.join(__dirname, 'dist'),
      ],
    },
  }
} else {
  module.exports = {
    ...config,
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      ...config.optimization,
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          extractComments: 'all',
          terserOptions: {
            mangle: true,
            ie8: false,
            warnings: false,
          },
        }),
      ]
    },
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^source-map-support\/register$/,
      }),
    ],
  }
}
