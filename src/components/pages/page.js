import React from "react";

import styles from "./styles.css"

import { Transition, TransitionGroup } from 'react-transition-group';

import { useTransition } from 'react-transition-state';

const Page = ({ title, content }) => {
  const [state, toggle] = useTransition({ timeout: 750, preEnter: true });
  return (
      <div className="Page">
        <h1>{title}</h1>
        <div>{content}</div>
      </div>
  );
}
export default Page;
