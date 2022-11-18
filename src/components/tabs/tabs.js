import React, { useState } from "react";

import Page from "../pages/page";

import styles from "./styles.css"

// Language

import LanguageToggle from '../language/language.js'

import { useTranslation } from 'react-i18next';

// Engineering

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Art

import cat from '../../assets/anims/cat.mkv';
import imp from '../../assets/anims/imp.mkv';

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelViewer from '../modelviewer';

import model from '../../assets/bamboo.glb';

const Tabs = () => {
  const { t } = useTranslation();

  //  Functions to handle Tab Switching
  const handlePageChange = (pageName) => {
    // update the state to tab1
    setActivePage(pageName);
  };

  const [activePage, setActivePage] = useState("Engineering");
  return (
    <div className="Tabs">
      <ul className="header">
        <LanguageToggle />
        <ul className="nav">
          <li
            className={activePage === "Engineering" ? "active" : ""}
            onClick={() => handlePageChange("Engineering")}
          >{t('engineering')}</li>
          <li
            className={activePage === "Art" ? "active" : ""}
            onClick={() => handlePageChange("Art")}
          >{t('art')}</li>
        </ul>
      </ul>
      <div className="outlet">
        {activePage === "Engineering" ?
          <Page
            title="Career History"
            content=
              <div>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="December 2015"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  >
                  <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Engineering, Computer Science</h3>
                  <h4 className="vertical-timeline-element-subtitle">Universtiy of Wisconsin, Madison</h4>
                  </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="Janurary 2016"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    >
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Johnson Health Tech, N.A.</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
          />
          :
          <Page
            title="Works"
            content=
              <div>
                <p>Cat</p>
                <video src={cat} autoPlay loop muted />
                <p>Imp</p>
                <video src={imp} autoPlay loop muted />
                <ModelViewer scale="1" modelPath={model} />
              </div>
           />
        }
      </div>
    </div>
  );
};
export default Tabs;
