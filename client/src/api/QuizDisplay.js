import React from "react";

const QuizDisplay = (props) => {
  console.log(props.question.correctAnswer);
  return (
    <div>
      <h1>Question {props.idx + 1}: {props.question.question}</h1>
      <div></div>
      <input type="checkbox" />
      answer One:{props.question.correctAnswer}
      <br />
      <input type="checkbox" />
      answer Two:<span>{props.question.incorrectAnswer[1]}</span>
      <br />
      {/* <input type="checkbox" />
      answer Two: {props.question.incorrectAnswer[2]}
      <br />
      <input type="checkbox" />
      answer Two: {props.question.incorrectAnswer[3]} */}
    </div>
  );
};

export default QuizDisplay;
