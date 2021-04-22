import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { setUILanguage } from "./middlewares/set-ui-language";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		setUILanguage,
		sapper.middleware()
	)
	.listen(PORT);
