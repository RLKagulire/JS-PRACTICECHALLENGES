//a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".
//use a while loop

function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return ""; 
  }
  let commonPrefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
    const currentString = strings[i];
    let j = 0;
    while (
      j < commonPrefix.length &&
      j < currentString.length &&
      commonPrefix[j] === currentString[j]
    ) {
      j++;
    }
    commonPrefix = commonPrefix.slice(0, j);
  }
  return commonPrefix;
}

let strings = ["complete", "companion", "comfort", "commute", "come"];
console.log(longestCommonPrefix(strings)); // should log "com"