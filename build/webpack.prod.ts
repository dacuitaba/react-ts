import * as path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import { baseConfig } from './webpack.base';
import { IgnorePlugin } from 'webpack';
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config: Configuration = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      // 添加插件
      filename: '[id].[contenthash:8].css',
    }),
    new BundleAnalyzerPlugin(),
    new IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
  ],
});

export default config;
