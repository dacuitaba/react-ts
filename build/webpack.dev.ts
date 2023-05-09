import * as path from 'path';
import { Configuration as Conf } from 'webpack';
import { Configuration as DevConf } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import { baseConfig } from './webpack.base';
interface Configuration extends Conf {
  devServer?: DevConf;
}

const host = '0.0.0.0';
const port = '8080';

const config: Configuration = merge(baseConfig, {
  mode: 'development', // 开发模式，打包更加快速，省了代码优化步骤
  devtool: 'eval-cheap-module-source-map', // source-map 追踪源代码
  devServer: {
    host,
    port,
    hot: true,
    compress: false, // gzip压缩,开发环境不开启，提升热更新速度
    historyApiFallback: true, // 解决history路由404问题
    setupExitSignals: true, // 允许在 SIGINT 和 SIGTERM 信号时关闭开发服务器和退出进程。
    static: {
      directory: path.join(__dirname, '../public'), // 托管静态资源public文件夹
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
});
export default config;
