import type { Request, Response, NextFunction } from "express";
import { pick } from 'accept-language-parser';
import languages from '../localization/languages';


const supportedLanguages = Object.keys(languages);

export async function get(req: Request, res: Response, next: NextFunction) {
    const language = pick(supportedLanguages, req.get('accept-language'));

    res.redirect(`/${language}/`);
}
