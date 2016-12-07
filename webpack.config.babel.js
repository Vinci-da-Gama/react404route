import nPath             from 'path';
import wpk               from 'webpack';
import WriteFilePlugin   from 'write-file-webpack-plugin';
import wpkMerge          from 'webpack-merge';
import autoPrefix        from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const ast = './_asserts', midBuild = `${ast}/_build/`, idxSrc = './_asserts/src/', sassLane = './_asserts/style/';
const entryIdx = `${idxSrc}index.js`;
const npmLifecycle = process.env.npm_lifecycle_event;

const commonConfig = {
    // for development.
    devtool: 'eval-source-map',
    // for product, usually no need.
    // devtool: 'inline-source-map',
    entry: {
        wuhaApp: [
            'babel-polyfill',
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client?http://127.0.0.0:8080',
            entryIdx
        ]
    },
    output: {
        // path: __dirname,
        path: nPath.resolve(__dirname, midBuild),
        // specifies the public URL address of the output files.
        // remember in express pj, there is a public folder -- 
        // in here, we set ./_asserts as that public folder
        // publicPath: ast,
        // publicPath: 'http://localhost:8080/_asserts/_build/js/',
        publicPath: '/',
        /*once you use webpack-dev-server, it will keep bundle.js in memery
        so it is not generate bundle.js files into your disk*/
        filename: 'js/[name]_bundle.js',
        pathinfo: true
    },
    clearBeforeBuild: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { presets: ['es2015', 'react', 'stage-1'] }
            },
            {   test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', // The backup style loader
                    'css?sourceMap!sass?sourceMap'
                )
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new wpk.HotModuleReplacementPlugin(),
        new wpk.optimize.OccurenceOrderPlugin(),
        new wpk.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        /*when you use webpack-dev-server and you also want to output bundle.js*/
        new WriteFilePlugin(),
        new ExtractTextPlugin('css/[name].css', {
            allChunks: true
        })
    ],
    devServer: {
        historyApiFallback: true,
        /*contentBase will define where webpack-dev-server should look
        Can be used to configure the behaviour of webpack-dev-server 
        when the webpack config is passed to webpack-dev-server CLI.*/
        contentBase: __dirname,
        stats: {
            colors: true,
            timings: true
        },
        // option: outputPath is only works with plugin -- write-file-webpack-plugin
        outputPath: nPath.join(__dirname, midBuild),
        /*hot: true,
        inline: true,*/
        quiet: false,
        noInfo: false
    }
};

// you also can define customized host and port here.
const processHostAndPort = {
    host: process.env.HOST,
    port: process.env.PORT
};

// const cp0 = require('./wpk_configs/config-part0.js');
import cp0 from './wpk_configs/config-part0.js';

// const sassComp = require('./wpk_configs/config_scss.js');

let wpkConfig;

// Detect how npm is run and branch based on that
switch(npmLifecycle) {
    case 'build':
        wpkConfig = wpkMerge(commonConfig, {});
        break;
    case 'part_0':
        console.log('105 -- part_0 in wpkMerge');
        wpkConfig = wpkMerge(commonConfig, cp0.devServer(processHostAndPort));
        break;
    default:
        wpkConfig = wpkMerge(commonConfig, {});
}

module.exports = wpkConfig;