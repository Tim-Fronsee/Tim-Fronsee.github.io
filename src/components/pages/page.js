import React from "react";

import styles from "./styles.css"

const Page = ({ title, content }) => {
  return (
      <div className="Page">
        <h1>{title}</h1>
        <div>{content}</div>
      </div>
  );
}
export default Page;
