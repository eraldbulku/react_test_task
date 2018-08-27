/** set webpack configuration file
 * command of webpack configuration: 
 * ./node_modules/.bin/webpack --config ../../webpack.config.js
 */
module.exports = {
	entry: ['./src/app-application.js'],
	output: {
		path: __dirname,
		filename: 'application.js'
	},
	module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};