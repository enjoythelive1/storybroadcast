import languages from "./languages";

export let language: keyof typeof languages = 'en';

if (typeof window !== "undefined") {
	[ , language ] = (
		window.location.pathname.split('/') as [string, keyof typeof languages, ...string[]]
	);
}

export function setLanguage(lang: keyof typeof languages) {
	language = lang;
}

export function translate(key: string): string {
	return languages[language]?.[key] ?? key;
}

export function translateUrl(url: string): string {
	return `${language}/${url}`;
}

export const _ = translate;
export const _url = translateUrl;
