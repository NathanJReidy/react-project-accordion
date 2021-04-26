import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info }) => {
  return (
    <div className="questionContainer">
      <div className="topContainer">
        <h4 className="question">{title}</h4>
        <div className="plusBtn">
          <AiOutlinePlus />
        </div>
      </div>
      <p className="infoContainer">{info}</p>
    </div>
  );
};

export default Question;
