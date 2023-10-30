//function named firstPalindrome
//takes a parameter:words which is an array of strings 
//return the first palindromic
//If there is no such string, return an empty string
// Remove non-alphanumeric characters and convert the string to lowercase
function firstPalindrome(words) {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (isPalindrome(word)) {
        return word;
      }
     
    }
    return "";
   }
  function isPalindrome(word) {
    const cleanedWord = word.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedWord = word.split('').reverse().join('');
    return cleanedWord === reversedWord;
   }
  const wordArray = ["hunter","come","madam","civic","close","level", "radar"];
  const result = firstPalindrome(wordArray);
  console.log(result); // should log "madam" 