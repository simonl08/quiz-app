import React, {useEffect, useState} from "react";
// import CheckBox from "./CheckBox"

const QuizDisplay = (props) => {
// const [displayOnLoad, setDisplayOnLoad] = useState([ ])
const [views, setViews] = useState()
const [buttonDisabled, setButtonDisabled] = useState("false")
const [visibility, setVisibility] = useState("hidden")

useEffect(() =>{
  
    if(props.idx === 0){
        console.log(props.question)
        setViews(0)
       }
},[] )

// const handleSubmit = ()  => 

// console.log()

  return (
    <div>
    {
    props.idx === views ?
    <div>
    <h1>{props.question.question}</h1>   

    <p>{props.question.correctAnswer}</p>
    <p>{props.question.incorrectAnswer[0]}</p>
    <p>{props.question.incorrectAnswer[1]}</p>
    <p>{props.question.incorrectAnswer[2]}</p>

    <button visibility="hidden" disabled={buttonDisabled}>Next Question</button>
    </div>
    : 
    " "

    }
    {}

     
     

    </div>
  );
};

export default QuizDisplay;


  /* <input type="checkbox" />
      answer Two: <span>{props.question.incorrectAnswer[0]}</span>
      <br />
      <input type="checkbox" />
      answer Three: <span>{props.question.incorrectAnswer[1]}</span>
      <br />
      <input type="checkbox" />
      answer Four: <span>{props.question.incorrectAnswer[2]}</span> */

