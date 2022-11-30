import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const dadJokes = "https://icanhazdadjoke.com/";

const Question = ({ title, info }) => {
  const [reveal, setReveal] = useState(false);
  const [joke, setJoke] = useState();
  // functions
  const toggleText = () => {
    setReveal(!reveal);
  };

  const jokeData = async () => {
    const response = await fetch(dadJokes, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Gene is Learning",
      },
    });
    const data = await response.json();
    setJoke(data);
  };

  useEffect(() => {
    jokeData();
  }, []);

  return (
    <article className='question'>
      <header>
        <h4>{joke.joke}</h4>
        <button className='btn' onClick={toggleText}>
          {reveal ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* <p>{reveal ? info : "...click plus to reveal"}</p> */}
      <p>{reveal && info}</p>
    </article>
  );
};

export default Question;
