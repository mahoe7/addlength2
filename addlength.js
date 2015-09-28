/**
 * Created by Michael on 9/27/2015.
 */
function wordLength(word) {
  return word.length;
}

function addLength(words) {
  return _.map(words, function(word) {
    return word + " " + word.length;
  });
}

console.log(addLength(["apple", "pear"]));
console.log(addLength(["you", "can", "win"]));