var webpack = require("webpack");
var path = require("path");


var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'js/');


module.exports = {
	resolve: {
		extensions: ['','.js', '.jsx']
	},
	entry: {
		javascript: APP_DIR + "/main.jsx",
		html: "./index.html"
	},
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				include: APP_DIR,
				loader: 'babel'
			},
			{
				test: /\.html$/,
				loader: 'file?name=[name].[ext]'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{ 
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
				loader: "file" 
			},
            { 
				test: /\.(woff|woff2)$/, 
				loader:"url?prefix=font/&limit=5000" 
			},
            { 
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
				loader: "url?limit=10000&mimetype=application/octet-stream" 
			},
            { 
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
				loader: "url?limit=10000&mimetype=image/svg+xml" 
			}
		]
	},
	devServer: {
		historyApiFallback:true
	}
};
