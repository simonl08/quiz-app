import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const ApiData = () => {
  //state relating to the api
  const [data, setData] = useState();
  const [category, setCategory] = useState("9");
  const [quiz, setQuiz] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data) {
      decoded(data);
    }
    console.log("memory leak");
  }, [data]);

  // <------------- variable to store api URL ------------------->
  const apiUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=medium&type=multiple&encode=url3986`;

  const apiCall = async (url) => {
    await axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log("There was an error loading the data", err);
        setError(error);
      });
  };

  //<------------- onClick from the form ---------------->
  let quizCall = (e) => {
    e.preventDefault();
    apiCall(apiUrl);
  };

  //<----------selecting the category option --------------->
  let catHandler = async (e) => {
    e.preventDefault();
    let value = e.target.value;
    setCategory(value);
  };

  // <------- decoded answers ------------------>>>>>
  let answers = [];
  let decoded = (data) => {
    console.log(data);
    data.map((item) => {
      let itemAnswers = {
        question: decodeURIComponent(item.question),
        correctAnswer: decodeURIComponent(item.correct_answer),
        incorrectAnswer: item.incorrect_answers.map((answer) => {
          return decodeURIComponent(answer);
        }),
      };
      console.log(itemAnswers);
      answers.push(itemAnswers);

      return setQuiz(answers);
    });
  };

  return (
    <div>
      <h1>Hello From the ApiData component</h1>
      <div className="">Select your quiz</div>
      <form onSubmit={quizCall}>
        <label>Choose a Category</label>

        <select className="selector" onChange={catHandler} id="selectCategory">
          {/* onChange={e => setCategory(e.target.value)} */}
          <option value={"9"}> General Knowledge</option>
          <option value={"10"}> Entertainment: Books </option>
          <option value={"11"}> Entertainment: Film </option>
          <option value={"12"}> Entertainment: Music</option>
        </select>
        <button type="submit"> Select Category</button>
      </form>

      {/* show the questions the user has chosen */}
      {/* {quiz && quiz.map((question, i) => {
      return (
        <div> 
          <h1>{question}</h1>
        </div>
      )  
    
})} */}
    </div>
  );
};
export default ApiData;