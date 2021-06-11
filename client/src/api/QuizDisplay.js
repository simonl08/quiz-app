import React, {useEffect, useState} from "react";
// import CheckBox from "./CheckBox"

const QuizDisplay = (props) => {
// const [displayOnLoad, setDisplayOnLoad] = useState([ ])
const [views, setViews] = useState(0)
const [display, setDisplay] = useState(null)
// const [buttonDisabled, setButtonDisabled] = useState("true")
// const [visibility, setVisibility] = useState("hidden")

useEffect(() =>{
   if(views ){
       console.log(props.idx)
       setViews(0)
        // setDisplay(props.idx)
        // console.log(display)
        setViews("")
   }
},[] )

let handleClick =  ()  => {

    setViews(prevDisplay => prevDisplay + 1 )

}

// console.log()

  return (
    <div>
         {views}
    {
    props.idx === views || display  ?
    <div>
    <h1>{props.question.question}</h1>   
       
    <p>{props.question.correctAnswer}</p>
    <p>{props.question.incorrectAnswer[0]}</p>
    <p>{props.question.incorrectAnswer[1]}</p>
    <p>{props.question.incorrectAnswer[2]}</p>

    <button disabled={""} onClick={handleClick} >Next Question</button>
    </div>
 
    : 
    " "

    }
    

     
     

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

