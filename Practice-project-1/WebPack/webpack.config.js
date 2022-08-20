const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  // entry:path.resolve(__dirname,'src/index.js'),  this is written if we do not want multiple entry points
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"), // this is for multiple entry points
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // the filename can be parameterized if we make the entry as an object --- the name of the bundled js file will be the name of the attribute inside the entry object
    assetModuleFilename:'[name][ext]'
},
  devtool:'source-map',
  devServer: {
    static : {
        directory : path.resolve(__dirname , 'dist')
    },
    port : 3000,
    open:true,
    hot:true,
    compress:true,
    historyApiFallback:true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test : /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource' 
      }
    ],
  },
  plugins : [
    new HtmlWebpackPlugin({
        title:'Webpack Application dad joke',
        filename:'index.html',
        template : 'src/template.html'
    })
  ]
};
