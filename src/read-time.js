'use strict';


function readTime(foo, wpm = 1) {
  return Math.ceil(numWords(foo) / wpm);
}
