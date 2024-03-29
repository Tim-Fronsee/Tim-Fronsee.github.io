import React, { useState } from "react";

import Page from "../pages/page";

import styles from "./styles.css";

// Language

import LanguageToggle from '../language/language.js'

import { useTranslation } from 'react-i18next';

import Engineering from '../pages/engineering'

import Art from '../pages/art'

import Game from '../pages/game'

import { useTransition } from 'react-transition-state';

const Tabs = () => {
  const { t } = useTranslation();

  const [state, toggle] = useTransition({ timeout: 750, preEnter: true });

  //  Functions to handle Tab Switching
  const handlePageChange = (pageName) => {
    // update the state to tab1
    setActivePage(pageName);
    toggle();
  };

  const [activePage, setActivePage] = useState("Engineering");
  return (
    <div className="Tabs">
      <div className="header">
        <LanguageToggle />
        <ul className="nav">
          <li
            className={activePage === "Engineering" ? "active" : ""}
            onClick={() => handlePageChange("Engineering")}
          >{t('engineering')}</li>
          <li
            className={activePage === "Game" ? "active" : ""}
            onClick={() => handlePageChange("Game")}
          >{t('game_design')}</li>
          <li
            className={activePage === "Art" ? "active" : ""}
            onClick={() => handlePageChange("Art")}
          >{t('art')}</li>
        </ul>
      </div>
      <div className="outlet">
        {activePage === "Engineering" ?
          <Page title={t('career')} content=<Engineering />/>
          :
          activePage === "Game" ?
            <Page title={t('game_design')} content=<Game />/>
            :
            <Page title={t("projects_3d")} content=<Art/> />
        }
      </div>
    </div>
  );
};
export default Tabs;
