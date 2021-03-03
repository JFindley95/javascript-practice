class Scrabble {
  constructor() {
    this.letterValues = { "a" : 1, "b" : 3, "c" : 3, "d" : 2, "e" : 1, "f" : 4 }
  }


calculateScore(word) {
  var count = 0;
  for(var i = 0; i < word.length; ++i) {
    var letter = word[i];
    count += this.letterValues[letter];
  }
  return count;
}
}
