import React, { useState } from 'react';
import { stories } from './stories';
import { v4 as uuid } from 'uuid';
import { blankStory, returnStory } from './blankStories';
import Answers from './Answers';

const Questions = () => {
  let [answers, setAnswers] = useState([]);
  let [story, setStory] = useState({
    title: '',
    story: '',
  });
  const handleSubmit = (evt) => {
    const getQuestions = document.querySelector('#questions');
    getQuestions.hidden = true;
    evt.preventDefault();
    console.log(evt.target.madlib.lable);
    setStory({
      title: evt.target.madlib.options[evt.target.madlib.selectedIndex].text,
      story: returnStory(evt.target.madlib.value),
    });
    setAnswers(blankStory(evt.target.madlib.value));
    console.log(story);
    // newAnswers = <Answers newInputs={answerArry} />;
    // return newAnswers;
  };
  const newStories = stories();
  //   console.log(newStories[0]);

  return (
    <>
      <div id="questions" className="container">
        <form name="main" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6 text-end ">
              <label htmlFor="madlib">Select a Madlib to get started : </label>
            </div>
            <div className="col-6 d-flex align-content-start">
              <select name="madlib" key={uuid()}>
                {newStories.map((ml) => (
                  <option key={uuid()} value={ml.story} lable={ml.title}>
                    {ml.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="p-2">
            <button className="btn btn-primary">Get Madlib!</button>
          </div>
        </form>
      </div>

      <Answers newInputs={answers} story={story} />
    </>
  );
};

export default Questions;
