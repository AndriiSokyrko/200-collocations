import React, { useState } from "react";

const QuestionBox = ({ question, answers, correct, selected }) => {
  const suffixAnswers =['some', 'overall', 'next', 'whole', 'before']
  const answerPrefix = correct.split(' ')[0]
  const variantsOfAnswers = answers.map((answer, index) => {
    const randomInt =Math.floor(Math.random() * 5);
    if (index === 2) return correct;
    return answerPrefix + ' ' + suffixAnswers[randomInt]
  } )
  const [answer, setAnswer] = useState(variantsOfAnswers);
   const res =  question.replace(correct, '...')
  return (
    <div className="questionBox">
      {/*<div className="question">{question}</div>*/}
      <div className="question">{res}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
