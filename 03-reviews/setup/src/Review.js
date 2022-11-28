import React, { useState } from 'react';
import people from './data';
import { FaArrowAltCircleLeft, FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, jon, image, text} = people[index]
  return (
    article
  )
};

export default Review;
