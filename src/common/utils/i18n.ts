import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import moment from 'moment-timezone';
import { initReactI18next } from 'react-i18next';
import en from '../../assets/locales/en/translation.json';
import ru from '../../assets/locales/ru/translation.json';

export const LANGUAGES = new Map([
  ['en', 'English'],
  ['ru', 'Русский'],
]);

export const LANGUAGES_SWITCHER = {
  en: 'Eng',
  ru: 'Рус'
};

const resources = {
  en: {
    translation: en
  },
  ru: {
    translation: ru
  }
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false, // process.env.NODE_ENV !== 'production',
    fallbackLng: 'en',
    supportedLngs: Array.from(LANGUAGES.keys()),
    resources: resources,
  });

const selfMoment = (date?: string | number) => {
  // const timezoneOffset = new Date().getTimezoneOffset();

  i18n.on('languageChanged', (lng: string) => {
    return moment(date).lang(lng);
  });

  return moment(date).lang(i18n.language);
};

export { selfMoment };

export default i18n;
