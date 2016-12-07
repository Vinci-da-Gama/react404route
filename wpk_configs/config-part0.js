import wpk from 'webpack';

// This will export devServer as function, you can pass host and port as arguments.
exports.devServer = function(optionsPassFromMainConfigFile) {
    return {
        // build simple poll system to solve HMR config error in 
        // some certain versions of Windows, Ubuntu, and Vagrant
        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 500,
            // Poll using interval (in ms, accepts boolean too)
            poll: 1200
        },
        devServer: {
            // Enable history API fallback so HTML5 History API based
            // routing works. This is a good default that will come
            // in handy in more complicated setups.
            historyApiFallback: true,

            // Unlike the cli flag, this doesn't set
            // HotModuleReplacementPlugin!
            hot: true,
            inline: true,

            // Display only errors to reduce the amount of output.
            stats: {
                assets: true,
                version: true,
                chunks: false,
                chunkModules: false
            },

            // Parse host and port from env to allow customization.
            //
            // If you use Vagrant or Cloud9, set
            // host: optionsPassFromMainConfigFile.host || '0.0.0.0';
            //
            // 0.0.0.0 is available to all network devices
            // unlike default `localhost`.
            host: optionsPassFromMainConfigFile.host, // Defaults to `localhost`
            port: optionsPassFromMainConfigFile.port // Defaults to 8080
        },
        plugins: [
            // Enable multi-pass compilation for enhanced performance
            // in larger projects. Good default.
            new wpk.HotModuleReplacementPlugin({
                multiStep: true
            })
        ]
    };
}
