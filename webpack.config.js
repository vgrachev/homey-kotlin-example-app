const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "build/kotlin-js-min/main/homey-kotlin-example-app.js"),
    output: {
        libraryTarget: "commonjs",
        path: path.resolve(__dirname, "dist"),
        filename: "kotlin-app.js"
    },
    resolve: {
        alias: {
            kotlin: path.resolve(__dirname, "build/kotlin-js-min/main/kotlin.js")
        }
    },
    externals: [
        {
            homey: {
                root: "homey",
                commonjs2: "homey",
                commonjs: "homey",
                amd: "homey"
            }
        }
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        unsafe_comps: true,
                        properties: true,
                        keep_fargs: false,
                        pure_getters: true,
                        collapse_vars: true,
                        unsafe: true,
                        warnings: false,
                        sequences: true,
                        dead_code: true,
                        drop_debugger: true,
                        comparisons: true,
                        conditionals: true,
                        evaluate: true,
                        booleans: true,
                        loops: true,
                        unused: true,
                        hoist_funs: true,
                        if_return: true,
                        join_vars: true,
                        drop_console: true
                    }
                }
            })
        ]
    }
};