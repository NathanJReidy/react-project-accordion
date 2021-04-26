import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="questionContainer">
      <div className="topContainer">
        <h4 className="question">{title}</h4>

        {open ? (
          <div className="minusBtn" onClick={() => setOpen(!open)}>
            <AiOutlineMinus />
          </div>
        ) : (
          <div className="plusBtn" onClick={() => setOpen(!open)}>
            <AiOutlinePlus />
          </div>
        )}
      </div>
      {open ? <p className="infoContainer">{info}</p> : null}
    </div>
  );
};

export default Question;
