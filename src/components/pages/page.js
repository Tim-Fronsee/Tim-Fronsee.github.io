import React from "react";

import styles from "./styles.css"

import { TransitionGroup } from 'react-transition-group';

const Page = ({ title, content }) => {
  return (
    <div className="Page">
        <p>{title}</p>
        <div>{content}</div>
    </div>
  );
};
export default Page;
