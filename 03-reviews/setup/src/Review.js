<<<<<<< HEAD
import React, { useState } from 'react';
import people from './data';
import { FaArrowAltCircleLeft, FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, jon, image, text} = people[index]
  return (
    article
  )
=======
import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  // checks if index is out of range and adjusts accordingly
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // const nextPerson = () => {
  //   setIndex(index - 1);
  // };
  const nextPerson2 = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  // const prevPerson = () => {
  //   setIndex(index + 1);
  // };
  const prevPerson2 = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber += 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button onClick={prevPerson2} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson2} className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson} className='random-btn'>
        surprise me
      </button>
    </article>
  );
>>>>>>> 397a4dc13f46c924da99cc42eee45f9f0261e5e8
};

export default Review;
