import React, { useEffect } from "react";

import { useTranslation } from 'react-i18next';
import { useTransition } from 'react-transition-state';

import {BrowserRouter as Router} from 'react-router-dom';

import styles from "./styles.css"

import cat from '../../assets/anims/cat.mkv';
import imp from '../../assets/anims/imp.mkv';

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelViewer from '../modelviewer';

import model from '../../assets/bamboo.glb';

const Art = () => {
  const [state, toggle] = useTransition({ timeout: 750, preEnter: true });
  const { t } = useTranslation();
  useEffect(() => {
    console.log("EFFECT");
    toggle();
  }, []);
  return (
    <div className={`Page ${state}`}>
      <p>{t("made_with")}</p>
      <Router>
        <div>
          <a href="https://www.blender.org/" target="_blank" rel="noreferrer">
            <img className="blender" src={require("../../assets/logos/blender_logo_no_socket_white.png")} />
          </a>
        </div>
      </Router>
      <p>{t("rigging")}</p>
      <div className="rigging">
        <div>
          <p>Cat</p>
          <video src={cat} autoPlay loop muted />
        </div>
        <div>
          <p>Imp</p>
          <video src={imp} autoPlay loop muted />
        </div>
      </div>
      <p>{t("course")}</p>
      <div className="course">
        <div>
          <img src={require("../../assets/renders/cgc_human_backlighting_bw.png")} />
        </div>
        <div>
          <img src={require("../../assets/renders/cgc_human_wood_grain.png")} />
        </div>
      </div>
      <img src={require("../../assets/renders/cgc_human_wide.png")} />
      <ModelViewer scale="1" modelPath={model} />
    </div>
  );
}
export default Art;
