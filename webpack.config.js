// const path = require('path');

// module.exports = env => {return {
//     entry: './client/index.js',
//     output:{
//         path: path.resolve(__dirname, 'build'),
//         filename: 'bundle.js'
//     },
//     mode: process.env.NODE_ENV,
//     module: {
//         rules: [
//             { 
//                 test: /\.jsx?/,
//                 exclude: /(node_modules)/,
//                 use: {
//                     loader: 'babel-loader',
 
//                     options: {
//                         presets: [
//                             '@babel/preset-env',
//                             '@babel/preset-react'
//                          ]
//                     }
//                 }
//              },
//              {
//                 test: /\.css$/i,
//                 use: [
//                     'style-loader',
//                     'css-loader'
//                 ]
//             }
//         ]
//     }
// }}