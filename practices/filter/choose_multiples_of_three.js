'use strict';

// function choose_multiples_of_three(collection) {
//
//   //implement here
// }

const choose_multiples_of_three = (number){
  const condition = (number) =>{return number % 3 === 0};
  return number.filter(condition);
}

module.exports = choose_multiples_of_three;
