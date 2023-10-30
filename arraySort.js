function sortArray(arr) {
    const result = {
      evens: [],
      odds: [],
      chars: []
    };
  
    for (const item of arr) {
      if (typeof item === "number") {
        if (item % 2 === 0) {
          result.evens.push(item);
        } else {
          result.odds.push(item);
        }
      } else if (typeof item === "string" && item.length === 1) {
        result.chars.push(item);
      }
    }
  
    // Sort the arrays without using the sort method
    result.evens = insertionSort(result.evens);
    result.odds = insertionSort(result.odds);
    result.chars = insertionSort(result.chars);
  
    return result;
  }
  
  // Insertion sort algorithm
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentElement = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentElement;
    }
    return arr;
  }
  const givenArray = [0.3, "z", 6, 2, "a", 5, 9, "b", 4];
  console.log(sortArray(givenArray));