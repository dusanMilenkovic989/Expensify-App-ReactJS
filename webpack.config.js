const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {                                          
    entry: './src-cli/app.js',            
    output: {                                               
        path: path.join(__dirname, 'public/scripts'),
        publicPath: '/scripts', 
        filename: 'bundle.js'                               
    },
    module: {
        rules: [{
            test: /\.js$/,                                  
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-transform-runtime']
                }
            }
        }, {
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader, 
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        url: false
                    }
                }, 
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'styles.css' }), 
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        historyApiFallback: true
    },
    devtool: 'source-map'
}