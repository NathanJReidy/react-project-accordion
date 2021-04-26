import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = () => {
  return (
    <div className="questionContainer">
      <h4 className="question">Question</h4>
      <div className="btnDiv">
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default Question;
