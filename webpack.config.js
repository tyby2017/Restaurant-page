const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
    },    
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
              loader: 'url-loader',
              options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[name].[ext]'
            } 
          }]
        }    
      ]
    },
   
};