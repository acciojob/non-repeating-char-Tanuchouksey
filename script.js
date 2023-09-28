function firstNonRepeatedChar(str) {
  if (str.length === 0) {
    return null;
  }

  // Create a frequency map to count the occurrences of each character
  const charCount = new Map();

  // Populate the frequency map
  for (const char of str) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null
This function first creates a frequency map to count the occurrences of each character in the string, and then it iterates through the string to find the first character with a frequency of 1. If no such character is found, it returns null.





