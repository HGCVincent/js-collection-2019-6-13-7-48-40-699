'use strict';

// function choose_even(collection) {
//
//   //implement here
//
// }

const choose_even = (number) => {
  const condition = (number) =>{return number % 2 === 0};
  return number.filter(condition);
}

module.exports = choose_even;
