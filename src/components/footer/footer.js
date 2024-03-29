import React from "react";

import styles from './styles.css'

import { useTranslation } from 'react-i18next';

import { BrowserRouter as Router } from 'react-router-dom';

import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <Router>
        <div>
          <a href="https://www.linkedin.com/in/tim-fronsee-b31186b3/" target="_blank" rel="noreferrer">
            <BsLinkedin style={{margin: '0 1rem 0 0', color: '#FFFFFF'}} size={40}/>
          </a>
          <a href="https://github.com/Tim-Fronsee" target="_blank" rel="noreferrer">
            <BsGithub style={{margin: '0 1rem 0 0', color: '#FFFFFF'}} size={40}/>
          </a>
        </div>
        <p className="name">{t("name")}</p>
      </Router>
    </div>
  );
}
export default Footer;
