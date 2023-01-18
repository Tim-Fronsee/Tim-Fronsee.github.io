import React from "react";

import { useTranslation } from 'react-i18next';

import { BrowserRouter as Router } from 'react-router-dom';

import Slide from '@mui/material/slide'

import styles from "./styles.css"

import battle from '../../assets/anims/battle.mp4';
import item_shop from '../../assets/anims/item_shop.mp4';
import toon_shading from '../../assets/anims/toon_shading.mp4';

const Game = () => {
  const { t } = useTranslation();
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <div>
        <div className="row_blender">
          <h3>{t("made_with")}</h3>
          <Router>
            <div>
              <a href="https://unity.com/" target="_blank" rel="noreferrer">
                <img
                  className="blender"
                  src={require("../../assets/logos/U_Logo_White_RGB.png")}
                  alt=""/>
              </a>
            </div>
          </Router>
        </div>
        <div className="game">
          <div>
            <h3>{t("toon_shading")}</h3>
            <video src={toon_shading} autoPlay loop muted playsinline />
          </div>
          <div>
            <h3>{t("battle")}</h3>
            <video src={battle} autoPlay loop muted playsinline />
          </div>
          <div>
            <h3>{t("item_shop")}</h3>
            <video src={item_shop} autoPlay loop muted playsinline />
          </div>
        </div>
      </div>
    </Slide>
  );
}
export default Game;
