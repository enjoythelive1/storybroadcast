import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express()
	.use(compression({ threshold: 0 }))
	.use(sirv('static', { dev }))
	.use(sapper.middleware())
	.listen(PORT, () => {
		console.log(`Serving app at port ${PORT}`)
	});
