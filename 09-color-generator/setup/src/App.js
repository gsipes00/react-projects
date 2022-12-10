import React, { useState } from "react";
import SingleColor from "./SingleColor";
import rgbToHex from "./utils";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [save, setSave] = useState("");

  // generate random color
  // use Math.random to generate three values for color, RGB
  let randomRed;
  let randomGreen;
  let randomBlue;

  // generate random color function
  const randomColor = () => {
    randomRed = Math.floor(Math.random() * 256);
    randomGreen = Math.floor(Math.random() * 256);
    randomBlue = Math.floor(Math.random() * 256);
    // const randomRGB = `${randomRed}, ${randomGreen}, ${randomBlue}`;
    const randomHex = rgbToHex(randomRed, randomGreen, randomBlue);
    setList(new Values(randomHex).all(10));
  };

  const saveColor = () => {
    setSave(list);
    console.log(save);
  };

  const setSavedColor = () => {
    setList(save);
  };

  // on form submit, generate color list and display
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? "error" : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
        <button className='random-btn' onClick={randomColor}>
          get random
        </button>
        <button className='random-btn' onClick={saveColor}>
          save color
        </button>
        {}
        <button id='color-one' className='random-btn' onClick={setSavedColor}>
          color one
        </button>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
