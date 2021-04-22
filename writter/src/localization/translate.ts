import languages from "./languages";

export let language = 'en';

if (typeof window !== "undefined") {
	const supportedLanguages = Object.keys(languages);
	language = window.navigator.languages.find(lang => supportedLanguages.includes(lang)) ?? 'en';
}

export function setLanguage(lang: keyof typeof languages) {
	language = lang;
}

export function translate(key: string): string {
	return languages[language]?.[key] ?? key;
}

export const _ = translate;
