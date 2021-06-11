import React, {useState, useEffect} from 'react'

const QuizDisplayTwo = (props) => {
 
    const [click, setClick] = useState(0)
    const [disabledBtn, setDisableBtn] = useState(true)

  useEffect(() => {

  }, [])

    let handleClick = () => {
         setClick(click + 1)
         if(click === 10){
                setDisableBtn(false)
         }

    }
    return(
        <div>
           {
                props.quiz.map((quiz, idx) => {
                    if(idx === click){
                     console.log(quiz.question)
                       return <div>
                       <p>Question {idx + 1}: {quiz.question}</p>
                       <input
                       placeholder={quiz.correctAnswer}
                       
                       />
                       <input
                       placeholder={quiz.incorrectAnswer[0]}
                       
                       />
                       <input
                       placeholder={quiz.incorrectAnswer[1]}
                       
                       />
                       <input
                       placeholder={quiz.incorrectAnswer[2]}
                       
                       />
                   <button  onClick={handleClick}> Next Question </button>
                   </div> 
                    } 
                    return ""
              
                })
            } 
    
        </div>

    )
       
}

export default QuizDisplayTwo;
