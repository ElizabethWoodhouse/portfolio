const path = require('path');

module.exports = {
	mode: 'development',
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
};