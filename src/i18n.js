import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import BackEnd from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
    .use(LanguageDetector) // определение языка системы юзера
    .use(BackEnd) // подгрузка переводов при помощи http-backend
    .use(initReactI18next) // создание instance
    .init({ fallbackLng: 'en', debug: false }); // запуск i18next

export default i18n;