import React from 'react';

const blankStory = (newStory) => {
  let newArray = [];
  let count = 1;
  while (newStory.indexOf(')') !== -1) {
    const start = newStory.indexOf('(');
    const stop = newStory.indexOf(')');
    let newInput = newStory.slice(start, stop + 1);
    let replaceInput = newInput.replace(
      newInput,
      '{' + count + '-' + newInput + '}'
    );
    replaceInput = replaceInput.replace('(', '');
    replaceInput = replaceInput.replace(')', '');
    newArray.push(replaceInput);
    newStory = newStory.replace(newInput, replaceInput);
    count++;
  }
  return newArray;
};

const returnStory = (newStory) => {
  let count = 1;
  // let newArray = [];
  while (newStory.indexOf(')') !== -1) {
    const start = newStory.indexOf('(');
    const stop = newStory.indexOf(')');
    let newInput = newStory.slice(start, stop + 1);
    let replaceInput = newInput.replace(
      newInput,
      '{' + count + '-' + newInput + '}'
    );
    replaceInput = replaceInput.replace('(', '');
    replaceInput = replaceInput.replace(')', '');
    // newArray.push(replaceInput);
    newStory = newStory.replace(newInput, replaceInput);
    count++;
  }
  return newStory;
};

export { blankStory, returnStory };
