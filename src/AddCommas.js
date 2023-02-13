import React, { useState } from 'react';
const AddCommas = () => {
  const handleChange = (evt) => {
    const { value } = evt.target;
    addCommas(value);
  };

  const addCommas = (num) => {
    const newNum = document.getElementById('numCommas');
    if (num < 0) {
      let anotherNum = num.toString().split('-');
      let newString = insertCommas(anotherNum[1]);
      newNum.innerText = '-' + newString;
      return;
    }
    if (num.indexOf('.') === -1) {
      const newString = insertCommas(num);
      newNum.innerText = newString;
    } else {
      let newNumber = num.split('.');
      const newString = insertCommas(newNumber[0]);
      newNum.innerText = newString + '.' + newNumber[1];
    }
  };

  const insertCommas = (num) => {
    console.log('Raw number being passed ==>' + num);
    const numArray = [...num];
    let newArray = [];
    let count = 0;

    if (numArray.length >= 4) {
      for (let i = numArray.length - 1; i >= 0; i--) {
        if (count === 3) {
          newArray.unshift(',');
          count = 0;
        }
        newArray.unshift(numArray[i]);
        //   console.log(count);
        count++;
      }
    } else {
      newArray = [...numArray];
    }

    let newString = '';
    newArray.map((nums) => {
      newString = newString + nums;
    });
    return newString;
  };

  return (
    <>
      <form>
        <label htmlFor="number">Number : </label>
        <input
          id="numberHolder"
          className="number"
          key={1}
          type="text"
          name="number"
          placeholder="12345"
          onChange={handleChange}
          role="numberHolder"
        />

        <div>
          <label id="numCommas">New Number Goes Here</label>
        </div>
      </form>
    </>
  );
};
export default AddCommas;
