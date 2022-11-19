import logo from './logo.svg';
import './App.css';

import i18next from 'i18next';

import { initReactI18next, useTranslation } from 'react-i18next';

import Tabs from './components/tabs/tabs';

import Footer from './components/footer/footer'

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
          contributions: 'Contributions',
          projects_3d: '3D Projects',
          engineering: 'Engineering',
          art: 'Art',
          open_source: 'Open Source Projects',
          rigging: '3D Character Rigging',
          course: 'Course Work',
          made_with: 'Made with'
        },
      },
      ja: {
        translation: {
          engineering: '工学',
          art: 'アート',
          open_source: '職務経歴'
        },
      },
    },
  });

function App() {
  return (
    <div className="App">
      <Tabs/>
      <Footer/>
    </div>
  );
}

export default App;
