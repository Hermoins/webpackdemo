// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')
module.exports = {
    // mode: 'development', // 开发模式
    entry: {
        main: path.resolve(__dirname, '../src/main.js'),
        header: path.resolve(__dirname, '../src/header.js')
    },
    output: {
        filename: '[name].[hash:8].js',      // 打包后的文件名称
        path: path.resolve(__dirname, '../dist')  // 打包后的目录
    },
    // devServer:{
    //     port:3000,
    //     hot:true,
    //     contentBase:'../dist'
    //   },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            chunks: ['main'] // 与入口文件对应的模块名
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/header.html'),
            filename: 'header.html',
            chunks: ['header'] // 与入口文件对应的模块名
        }),
        new CleanWebpackPlugin(),
        new vueLoaderPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    plugins: [require('autoprefixer')]
                }
            }] // 从右向左解析原则
        },
        {
            test: /\.vue$/,
            use: ['vue-loader']
        },
        ]
    },
    resolve:{
        alias:{
          'vue$':'vue/dist/vue.runtime.esm.js',
          '@':path.resolve(__dirname,'../src')
        },
        extensions:['*','.js','.json','.vue']
   },
}