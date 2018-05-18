const path = require('path');

module.exports = {
  entry: { 
    app: './src/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch:true,
  devServer:{
    //contentBase:'./dist',
    port:8090,
    compress:true,// 服务器压缩
    open:true,// 自动打开浏览器
    // hot:true//热更新
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          use: {
              loader: 'babel-loader'
          },
          exclude: /node_modules/ // path.resolve(__dirname, "node_modules")
      }
    ]
  },
  plugins: [
  
  ]
}