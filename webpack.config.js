const path = require('path');
const sveltePreprocess = require('svelte-preprocess');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  module: {
    rules: [
        {
            // Svelte 5+:
            test: /\.(svelte|svelte\.js)$/,
            use: {
                loader: 'svelte-loader',
                options: {
                  preprocess: sveltePreprocess(),
                }
            }
        },
        {
            test: /node_modules\/svelte\/.*\.mjs$/,
            resolve: {
                fullySpecified: false
            }
        }
    ],
  },
  resolve: {
    alias: {
        svelte: path.resolve('node_modules', 'svelte/src/runtime')
    },
    extensions: ['.tsx', '.ts', '.js', '.mjs', ".svelte"],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    conditionNames: ['svelte', 'browser']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin(), new HtmlInlineScriptPlugin()],
};