import {Language} from '../src/lib/types';

// string files
import {default as be} from './strings/be.json';
import {default as de} from './strings/de.json';
import {default as en} from './strings/en.json';
import {default as hu} from './strings/hu.json';
import {default as id} from './strings/id.json';
import {default as mwl} from './strings/mwl.json';
import {default as ru} from './strings/ru.json';
import {default as tr} from './strings/tr.json';

// resources object passed to i18next
export const resources = {
  be: {translation: be},
  de: {translation: de},
  en: {translation: en},
  hu: {translation: hu},
  id: {translation: id},
  mwl: {translation: mwl},
  ru: {translation: ru},
  tr: {translation: tr},
};

// languages object, used for settings
export const languages = {
  be: {
    name: 'беларуская',
    englishName: 'Belarusian',
    emoji: '🇧🇾',
  } as Language,
  de: {
    name: 'Deutsch (Deutschland)',
    englishName: 'German (Germany)',
    emoji: '🇩🇪',
  } as Language,
  en: {
    name: 'English (Traditional)',
    englishName: 'English (UK)',
    emoji: '🇬🇧',
  } as Language,
  hu: {name: 'Magyar', englishName: 'Hungarian', emoji: '🇭🇺'},
  id: {
    name: 'Bahasa Indonesia',
    englishName: 'Indonesian',
    emoji: '🇮🇩',
  } as Language,
  // it: {name: 'Italiano', englishName: 'Italian', emoji: '🇮🇹'} as Language,
  mwl: {name: 'Mirandés', englishName: 'Mirandese', emoji: '🇵🇹'} as Language,
  ru: {name: 'Русский', englishName: 'Russian', emoji: '🇷🇺'} as Language,
  tr: {name: 'Türkçe', englishName: 'Turkish', emoji: '🇹🇷'} as Language,
};
