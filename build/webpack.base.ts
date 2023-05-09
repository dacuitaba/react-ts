const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.NODE_ENV === 'production';
const config: webpack.Configuration = {
  entry: {
    index: path.join(__dirname, '..', 'src', 'index.tsx'),
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: isProd ? '[name].[contenthash:8].js' : '[name].bundle.js',
    chunkFilename: isProd
      ? '[name].[contenthash:8].chunk.js'
      : '[name].chunk.js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    alias: {
      '@': path.join(__dirname, '../src'),
    },
    modules: [path.resolve(__dirname, '../node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ], // postcss-loader 兼容 ,css-loader提取样式,style-loader 以style标签形式注入页面
      },
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.module\.less$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                auto: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          priority: 1,
          test: /[\\/]node_modules[\\/](react|react-dom|axios)[\\/]/,
          minSize: 0,
          minChunks: 1,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      chunks: ['index', 'vendor', 'common'],
    }),
  ],
};

export const baseConfig = config;
