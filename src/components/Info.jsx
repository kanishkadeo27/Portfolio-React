import React from "react";
import { personalInfo } from "../data";

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li
            className="info__item"
            onKeyUpCapture={() => console.log(`KeyUp on item ${index}`)}
            key={index}
          >
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
};

export default Info;
