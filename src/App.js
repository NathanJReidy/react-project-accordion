import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  return (
    <main>
      <section>
        <h3 className="title">Questions And Answers About Login</h3>
        <SingleQuestion />
      </section>
    </main>
  );
}

export default App;
