//isPalindrome(string)
//Create a method called is_palindrome
//to check if a string is a palindrome.
//Do not use any reverse method.

//for example: kayak, madam, refer, radar,
//racecar, level

var isPalindrome = function (string) {
  for (var i=0; i< Math.floor(string.length/2); i++) {
    if(string.charAt(i) !== string.charAt(string.length - 1 - i)){
      return false;
    }
  }return true;
};

console.log(isPalindrome('madam'));


//Scratch
//=======

// function palindrome(string) {
//  var length = string.length;
//     for ( var i = 0; i < Math.ceil(length/2); i++ ) {
//         if (string[i] !== string[length - 1 - i]) {
//             return false;
//         }
//  }
//  return true;
// }
// console.log(palindrome("race"));