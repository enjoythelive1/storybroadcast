import type { NextFunction, Request, Response } from 'express';
import languages from "../localization/languages";
import { setLanguage } from "../localization/translate";
import { pick } from "accept-language-parser";

const supportedLanguages = Object.keys(languages);

export function setUILanguage(req: Request, res: Response, next: NextFunction) {
	setLanguage(pick(supportedLanguages, req.get('accept-language')) as keyof typeof languages);

	next();
}
