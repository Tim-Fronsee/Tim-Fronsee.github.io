import './App.css';

import i18next from 'i18next';

import { initReactI18next } from 'react-i18next';

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
          cat: 'Childhood Cat',
          imp: 'Imp',
          career: 'Career History',
          rigging: '3D Character Rigging',
          renders: 'Renders',
          course: 'Course Work',
          course_credit: "CG Cookie's HUMAN Course",
          made_with: 'Made with',
          date_godot: 'September 2022',
          date_ros_integration: 'December 2019 - September 2020',
          date_seaos: 'December 2019 - PRESENT',
          date_seaos_2: 'July 2019 - November 2019',
          date_ingenico: 'December 2018 - June 2019',
          date_libgdx: 'October 2018 - September 2018',
          date_scoville: 'May 2018 - November 2018',
          date_johnson: 'January 2016 - April 2018',
          date_uni: 'December 2015',
          simulation_engineer: '3D Simulation Engineer',
          robotics_engineer: 'Robotics Software Engineer',
          software_engineer: 'Software Engineer ',
          degree: 'Bachelor of Science in Computer Engineering, Computer Science',
          uni: 'University of Wisconsin, Madison',
          name: 'Tim Fronsee'
        },
      },
      ja: {
        translation: {
          contributions: '貢献',
          projects_3d: '3D事業',
          engineering: '工学',
          art: 'アート',
          cat: '子供時に猫ちゃん',
          imp: '邪鬼',
          career: '職務経歴',
          rigging: '3Dキャラクターリギング',
          renders: 'レンダリング',
          course: '課程の事業',
          course_credit: 'CG CookieのHUMAN課程',
          made_with: 'アートを作ったソフトは',
          date_godot: '2022年9月',
          date_ros_integration: '2019年12月から2020年9月',
          date_seaos: '2019年12月から現在まで',
          date_seaos_2: '2019年7月から2019年11月まで',
          date_ingenico: '2018年12月から2019年6月まで',
          date_libgdx: '2018年8月から2018年9月まで',
          date_scoville: '2018年5月から2018年11月まで',
          date_johnson: '2016年1月から2018年4月まで',
          date_uni: '2015年12月',
          simulation_engineer: '3Dシムレイションエンジニア',
          robotics_engineer: 'ロボソフトエンジニア',
          software_engineer: 'ソフトエンジニア',
          degree: 'コンピュータ工学とコンピュータ科学の学士号',
          uni: 'ウィスコンシン大学、マディソン',
          name: 'フロンセ・ティム'
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
