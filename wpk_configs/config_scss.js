exports.setupSCSS = function(sassPath) {
    return {
        module: {
            loaders: 
            [
            	{
				    test: /\.scss$/,
				    loaders: ["style", "css?sourceMap", "sass?sourceMap"],
	                include: sassPath
				}
            ]
        }
    };
}
