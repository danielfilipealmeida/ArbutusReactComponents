var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
        vendor: [path.join(__dirname, "js", "vendors.jsx")]
    },
    output: {
        path: path.join(__dirname, "build", "dll"),
        filename: "dll.ArbutusComponents.js",
        library: "ArbutusComponents"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "build", "dll", "ArbutusComponents-manifest.json"),
            name: "ArbutusComponents",
            context: path.resolve(__dirname, "client")
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        root: path.resolve(__dirname, "client"),
        modulesDirectories: ["node_modules"]
    }
};