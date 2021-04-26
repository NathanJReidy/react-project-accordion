import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section>
        <h3 className="title">Questions And Answers About Login</h3>

        <div className="container">
          {questions.map((question) => {
            console.log(question);
            const { id, title, info } = question;
            return <SingleQuestion id={id} title={title} info={info} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
