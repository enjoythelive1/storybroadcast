import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { redirectToAValidLanguage } from "./middlewares/redirect-to-valid-language";
import { setUILanguage } from "./middlewares/set-ui-language";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express()
	.use(compression({ threshold: 0 }))
	.use(sirv('static', { dev }))
	.use(redirectToAValidLanguage)
	.use(setUILanguage)
	.use(sapper.middleware())
	.listen(PORT, () => {
		console.log(`Serving app at port ${PORT}`)
	});
