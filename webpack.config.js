
var HtmlWebpackPlugin = require("html-webpack-plugin")
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
var path = require("path")

module.exports = {
    entry: './src/App.js',
    output: {
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader', 'sass-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query: {
                    presets: ['es2015','react']
                    }
            }
        ]
        
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress:true,
        port:process.env.PORT
        
    },
    plugins:[new HtmlWebpackPlugin({
        title:'react Project',
        minify:{
            collapseWhitespace:true
            
        },
        hash:true,
        template:'./src/index.html'
    }),
    new ExtractTextWebpackPlugin({
        filename:'app.css',
        disable:false,
        allChunks:true
    })
    ]
    
}