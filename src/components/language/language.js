import React from "react"

import styles from './styles.css'

import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  return (
    <div className="LanguageToggle">
      <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ja' : 'en')} className="lang">
        <ul className={i18n.language === 'en' ? "active" : "inactive"}>EN</ul>
        <ul className="inactive">/</ul>
        <ul className={i18n.language === 'ja' ? "active" : "inactive"}>JP</ul>
      </button>
    </div>
  );
};
export default LanguageToggle;
