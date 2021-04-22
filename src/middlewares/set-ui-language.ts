import type { Request, Response, NextFunction } from 'express';
import type languages from "../localization/languages";
import {setLanguage} from "../localization/translate";

export function setUILanguage(req: Request, res: Response, next: NextFunction) {
	const [ , language ] = req.path.split('/') as [string, keyof typeof languages, ...string[] ];

	setLanguage(language);

	next();
}
