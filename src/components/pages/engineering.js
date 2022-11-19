import React from "react";

import {BrowserRouter as Router} from 'react-router-dom';

import { VerticalTimeline, VerticalTimelineElement, WorkIcon }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useTranslation } from 'react-i18next';

import styles from './styles.css'

import { MdSchool, MdWork } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'

import Button from '@mui/material/Button'

const Engineering = () => {
const { t } = useTranslation();
  return (
    <Router>
      <div className="VerticalTimeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Janurary 2020"
            icon={<MdWork/>}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">3D Simulation Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">SEAOS Inc.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2019"
            icon={<MdWork/>}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Robotics Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">SEAOS Inc.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2018"
            icon={<MdWork/>}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Injenico Japan</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="October 2018"
            icon={<BsGithub/>}
            iconStyle={{'text-align': 'center', background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Libgdx Fixes</h3>
            <Button
              style={{backgroundColor: '#858585', color: '#FFFFFF', 'text-transform': 'none'}}
              href="https://github.com/libgdx/libgdx/commits?author=Tim-Fronsee&since=2018-10-11&until=2018-10-12">
              {t("contributions")}
            </Button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2018"
            icon={<MdWork/>}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Scoville Co., Ltd.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Janurary 2016"
            icon={<MdWork/>}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer II</h3>
            <h4 className="vertical-timeline-element-subtitle">Johnson Health Tech, N.A.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="December 2015"
            icon={<MdSchool/>}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Engineering, Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Universtiy of Wisconsin, Madison</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Router>
  );
}
export default Engineering;
