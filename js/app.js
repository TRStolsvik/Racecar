(function (app) {
  'use strict';

  app.raceCar = function () {
    let submitButton = document.getElementById('btnSubmit');
    submitButton.addEventListener('click', getValue);
  };

  function getValue() {
    // Get the string from the user.
    let userString = document.getElementById('inputString').value;

    let userStringNoSpecial = removeSpecials(userString);

    let reversedString = reverseString(userStringNoSpecial);

    let palindromeChecked = checkPalindrome(
      userStringNoSpecial,
      reversedString
    );

    displayPalindrome(palindromeChecked);
  }

  function removeSpecials(userString) {
    // Remove Special characters and make the string lowercase.
    const noSpecials = userString.replace(/[^a-zA-Z]/g, '');
    const lowercase = noSpecials.toLowerCase();

    return lowercase;
  }

  function reverseString(userStringNoSpecial) {
    let reversedString = '';
    // Reverse the string.
    for (let i = userStringNoSpecial.length - 1; i >= 0; i--) {
      reversedString += userStringNoSpecial[i];
    }
    return reversedString;
  }

  function checkPalindrome(userStringNoSpecial, reversedString) {
    // Check string for palindromation (yes that's now a word).
    const palindromeMessage = `The word ${userStringNoSpecial} is a palindrome and becomes ${reversedString}!`;
    const errorMessage = `The word ${userStringNoSpecial} is not a palindrome, please try again with a different word or string.`;

    if (userStringNoSpecial == reversedString) {
      return palindromeMessage;
    } else {
      return errorMessage;
    }
  }

  function displayPalindrome(palindromeChecked) {
    // Display the returned string.
    document.getElementById('results').innerText = palindromeChecked;
  }
})((window.app = window.app || {}));
