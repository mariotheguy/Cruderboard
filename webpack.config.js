const path = require('path');

module.exports = env => {return {
    entry: './client/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                         ]
                    }
                }
             },
             {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        publicPath: "./build/",
        compress: true,
        port: 8080,
        proxy: {
            '/add_user': 'http://localhost:3000/', 
            '/player_data': 'http://localhost:3000/'
        }
    }
}}