// complete the given function
function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compare characters from both ends of the cleaned string
  for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      return false; // Characters don't match, not a palindrome
    }
  }

  return true; // All characters match, it's a palindrome
}

module.exports = palindrome;

