import logo from './logo.svg';
import './App.css';

import i18next from 'i18next';

import { initReactI18next, useTranslation } from 'react-i18next';

import Tabs from './components/tabs/tabs';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          engineering: 'Engineering',
          art: 'Art',
        },
      },
      ja: {
        translation: {
          engineering: '工学',
          art: 'アート',
        },
      },
    },
  });

function App() {
  return (
    <div className="App">
      <Tabs/>
    </div>
  );
}

export default App;
