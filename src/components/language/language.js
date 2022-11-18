import React from "react"

import styles from './styles.css'

import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  return (
    <div className="languageSwitcher">
      <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ja' : 'en')} className="lang">EN/JP</button>
    </div>
  );
};
export default LanguageToggle;
