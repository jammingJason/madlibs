import React from 'react';
import './CompleteStory.css';
const CompleteStory = ({ completeStory }) => {
  const handleClick = (evt) => {
    const oldDiv = document.querySelector('#storyHolder');
    const questionDiv = document.querySelector('#questions');
    questionDiv.hidden = false;
    oldDiv.remove();
  };

  return (
    <>
      <div className="container" id="storyHolder">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 text-start">
            <p>{completeStory}</p>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      {/* <div>
        <button type="button" className="btn btn-success" onClick={handleClick}>
          Reset Madlib
        </button>
      </div> */}
    </>
  );
};

export default CompleteStory;
