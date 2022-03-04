const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
	openapi: '3.0.0',
	info: {
		title: 'API documentation Thinh ne',
		version,
		license: {
			name: 'MIT',
			url: 'abc',
		},
	},
	servers: [
		{
			url: `http://localhost:${config.port}/v1`,
		},
	],
};

module.exports = swaggerDef;
