import React from "react";

import { useTranslation } from 'react-i18next';

import { BrowserRouter as Router } from 'react-router-dom';

import Slide from '@mui/material/slide'

import styles from "./styles.css"

import cat from '../../assets/anims/cat.mp4';
import imp from '../../assets/anims/imp.mp4';

const Art = () => {
  const { t } = useTranslation();
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <div>
        <div className="row_blender">
          <h3>{t("made_with")}</h3>
          <Router>
            <div>
              <a href="https://www.blender.org/" target="_blank" rel="noreferrer">
                <img
                  className="blender"
                  src={require("../../assets/logos/blender_logo_no_socket_white.png")}
                  alt=""/>
              </a>
            </div>
          </Router>
        </div>
        <h2>{t("rigging")}</h2>
        <div className="rigging">
          <div>
            <h3>{t("cat")}</h3>
            <video src={cat} autoPlay loop muted playsinline />
          </div>
          <div>
            <h3>{t("imp")}</h3>
            <video src={imp} autoPlay loop muted playsinline />
          </div>
        </div>
        <h2>{t("renders")}</h2>
        <div className="background_image">
          <img
            src={require("../../assets/renders/Treehouse-Concept12.png")}
            alt="" />
        </div>
        <h2>{t("course")}</h2>
        <h3>{t("course_credit")}</h3>
        <div className="background_image">
          <div className="course">
            <div>
              <img
                src={require("../../assets/renders/cgc_human_backlighting_bw.png")}
                alt="" />
            </div>
            <div>
              <img
                src={require("../../assets/renders/cgc_human_wood_grain.png")}
                alt="" />
            </div>
          </div>
          <img
            src={require("../../assets/renders/cgc_human_wide.png")}
            alt="" />
        </div>
      </div>
    </Slide>
  );
}
export default Art;
