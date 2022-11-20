import React from "react";

import {BrowserRouter as Router} from 'react-router-dom';

import { VerticalTimeline, VerticalTimelineElement, WorkIcon }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useTranslation } from 'react-i18next';

import { useTheme } from '@mui/material/styles'

import styles from './styles.css'

import { MdSchool, MdWork } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'

import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'

const Engineering = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const buttonStyle = {
    backgroundColor: '#858585',
    color: '#FFFFFF',
    display: 'flex',
    textTransform: 'none',
    transition: 'all 0.7s',
    fontFamily: theme.typography.fontFamily
  }
  const chipStyle = {
    color: '#FFFF',
    fontFamily: theme.typography.fontFamily
  }
  const arrowStyle = {
    borderRight: '7px solid  #C4C4C4'
  }
  const contentStyle = {
    background: '#c4c4c4',
    boxShadow: '0 3px 0 #858585',
  }
  const iconStyle = {
    background: '#575757',
    color: '#FFFF'
  }
  return (
    <Router>
      <div className="VerticalTimeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            date={t("date_godot")}
            icon={<BsGithub/>}
            iconStyle={iconStyle}
          >
            <div className="row">
              <Chip label="Godot" style={chipStyle}/>
              <Chip label="C++" style={chipStyle}/>
            </div>
            <h3 className="vertical-timeline-element-title">Godot</h3>
            <Button
              style={buttonStyle}
              href="https://github.com/godotengine/godot/commits?author=Tim-Fronsee&since=2022-01-01&until=2022-12-31">
              {t("contributions")}
            </Button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            date={t("date_ros_integration")}
            icon={<BsGithub/>}
            iconStyle={iconStyle}
          >
            <div className="row">
              <Chip label="Unreal Engine 4" style={chipStyle}/>
              <Chip label="C++" style={chipStyle}/>
            </div>
            <h3 className="vertical-timeline-element-title">ROSIntegrationVision</h3>
            <Button
              style={buttonStyle}
              href="https://github.com/code-iai/ROSIntegrationVision/commits?author=Tim-Fronsee&since=2019-01-01&until=2020-12-31">
              {t("contributions")}
            </Button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            date={t("date_ros_integration")}
            icon={<BsGithub/>}
            iconStyle={iconStyle}
          >
            <div className="row">
              <Chip label="Unreal Engine 4" style={chipStyle}/>
              <Chip label="C++" style={chipStyle}/>
            </div>
            <h3 className="vertical-timeline-element-title">ROSIntegration</h3>
            <Button
              style={buttonStyle}
              href="https://github.com/code-iai/ROSIntegration/commits?author=Tim-Fronsee&since=2019-01-01&until=2020-12-31">
              {t("contributions")}
            </Button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            date={t("date_seaos")}
            icon={<MdWork/>}
            iconStyle={iconStyle}
          >
            <h3 className="vertical-timeline-element-title">{t("simulation_engineer")}</h3>
            <h4 className="vertical-timeline-element-subtitle">SEAOS Inc.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            date={t("date_seaos_2")}
            icon={<MdWork/>}
            iconStyle={iconStyle}
          >
            <h3 className="vertical-timeline-element-title">{t("robotics_engineer")}</h3>
            <h4 className="vertical-timeline-element-subtitle">SEAOS Inc.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            date={t("date_ingenico")}
            icon={<MdWork/>}
            iconStyle={iconStyle}
          >
            <h3 className="vertical-timeline-element-title">{t("software_engineer")}</h3>
            <h4 className="vertical-timeline-element-subtitle">Injenico Japan</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            date={t("date_libgdx")}
            icon={<BsGithub/>}
            iconStyle={iconStyle}
          >
            <div className="row">
              <Chip label="Android" style={chipStyle}/>
              <Chip label="Java" style={chipStyle}/>
            </div>
            <h3 className="vertical-timeline-element-title">Libgdx</h3>
            <Button
              style={buttonStyle}
              href="https://github.com/libgdx/libgdx/commits?author=Tim-Fronsee&since=2018-10-11&until=2018-10-12">
              {t("contributions")}
            </Button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            date={t("date_scoville")}
            icon={<MdWork/>}
            iconStyle={iconStyle}
          >
            <h3 className="vertical-timeline-element-title">{t("software_engineer")}</h3>
            <h4 className="vertical-timeline-element-subtitle">Scoville Co., Ltd.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            date={t("date_johnson")}
            icon={<MdWork/>}
            iconStyle={iconStyle}
          >
            <h3 className="vertical-timeline-element-title">{t("software_engineer")}II</h3>
            <h4 className="vertical-timeline-element-subtitle">Johnson Health Tech, N.A.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentArrowStyle={arrowStyle}
            contentStyle={contentStyle}
            date={t("date_uni")}
            icon={<MdSchool/>}
            iconStyle={iconStyle}
          >
            <h3 className="vertical-timeline-element-title">{t("degree")}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t("uni")}</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Router>
  );
}
export default Engineering;
