import type { Request, Response, NextFunction } from "express";
import {pick} from "accept-language-parser";
import languages from "../localization/languages";


const supportedLanguages = Object.keys(languages);

export function redirectToAValidLanguage(req: Request, res: Response, next: NextFunction): void {
    if (req.path.match(/\.\w+/)) return next();

    const [ , currentLanguage, ...otherParts ] = req.path.split('/')

    if (supportedLanguages.includes(currentLanguage) || !currentLanguage) return next();

    const language = pick(supportedLanguages, req.get('accept-language'));

    return res.redirect(['', language, ...otherParts].join('/'));
}
