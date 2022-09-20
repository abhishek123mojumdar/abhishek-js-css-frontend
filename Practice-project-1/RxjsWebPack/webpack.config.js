const path = require('path')

module.exports = {
    mode : 'development',
    entry : {
        bundle : path.resolve(__dirname,'src/index.ts')
    },
    output : {
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
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
    module : {
        rules :[
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                exclude : /node_modules/
              },
        ]
    }
}