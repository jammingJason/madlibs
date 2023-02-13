import React, { useState } from 'react';
import { blankStory } from './blankStories';
import { v4 as uuid } from 'uuid';
import CompleteStory from './CompleteStory';

const Answers = ({ newInputs, story }) => {
  const [inputInfo, setInputInfo] = useState({});
  const [compStory, setCompStory] = useState('');
  const handleSubmit = (evt) => {
    const oldDiv = document.querySelector('#divAnswers');
    oldDiv.remove();
    evt.preventDefault();
    setCompStory(combineStoryWithText(inputInfo, story.story));
    // console.log(compStory);
    // const getInput = document.querySelectorAll('input');
    // for (const input of getInput) {
    //   input.value = '';
    // }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputInfo({
      ...inputInfo,
      [name]: value,
    });
  };

  const combineStoryWithText = (info, ml) => {
    for (const key in info) {
      if (Object.hasOwnProperty.call(info, key)) {
        const element = info[key];
        ml = ml.replace(key, element);
      }
    }
    return ml;
    // console.log(ml);
  };
  const makeFirstLetter = (phrase) => {
    const firstLetter = phrase.charAt(0).toUpperCase();
    let restOfPhrase = phrase.slice(1);
    return firstLetter + restOfPhrase;
  };

  let buildInput = [];
  newInputs.map((input, idx) => {
    const uniqueName = input;
    input = input.split('-');
    input = input[1];
    input = input.replace('{', '');
    input = input.replace('}', '');
    buildInput.push(
      <div key={idx + '-div'} className="container">
        <div className="row">
          <div className="col text-end ">
            <label key={idx + '-lbl'} htmlFor={uniqueName}>
              {makeFirstLetter(input)} :
            </label>
          </div>
          <div className="col d-flex align-content-start">
            <input
              key={idx}
              type="text"
              name={uniqueName}
              id={uniqueName}
              placeholder={makeFirstLetter(input)}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
    );
    // console.log(input);
  });
  // buildInput.push(<button>Submit</button>);

  return (
    <>
      <h3>{story.title}</h3>
      <div id="divAnswers">
        <form onSubmit={handleSubmit}>
          {buildInput}
          {buildInput.length !== 0 ? (
            <div className="p-2">
              <button className="btn btn-primary">Generate Madlibs</button>
            </div>
          ) : (
            ''
          )}
        </form>
      </div>
      <div>
        {compStory !== '' ? <CompleteStory completeStory={compStory} /> : null}
      </div>
    </>
  );
};

export default Answers;
