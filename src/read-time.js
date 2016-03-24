'use strict';


const readTime = function (foo, wpm = 1) {
  return Math.ceil(numWords(foo) / wpm);
};
