// compress(string)
// Use a pattern and consolidate the amount of characters into a simplified string

// input  pattern = "AAASSSDDDDRDDSASSDDDSSSAD"
// output pattern = 3A3S4DR2DSA2S3D3SAD
// If a character is represented more than once, append the number of occurences in front of it. If a chracter is only represented once, just put that letter

// Hint Use a loop to iterate over a string. You can reference characters in a string similar to an array.

var compress = function (string) {

	var newString = [];
	var count = [];

	for (var i = 0; i <= string.length; i++) {
		if (string.charAt(i) === string.charAt(i-1)) {
			// console.log(string.charAt(i-1))
			//console.log(string.charAt(i+1));
			count.push(string.charAt(i));
		} else if (string.charAt(i) !== -1) {
			count.push(string.charAt(i-1));
				if(count.length > 1) {
					newString.push(count.length, string.charAt(i-1));
					count = [];
				}
				else {
					newString.push(string.charAt(i-1));
					count = [];
				}
			}
		}return newString.join('');
}

var input = 'AAASSSDDDDRDDSASSDDDSSSAD';
console.log(compress(input));


//Scratch
//=======
// var count = 1;

// function compress (string) {
// 	var newString = '';
// 	for (var i = 0; i < string.length; i++) {
// 		if (string[i] = string[i+1]) {
// 			count+=1;
// 		}
// 		else if((string[i]) != (string[i+1])) {
// 			if (count > 1) {
// 				count = 1;
// 				newString += count + string[i];
// 			}
// 			else {
// 				newString += count + string[i];
// 			}
// 		}
// 	} return newString;
// }

// compress("AAASSSDDDDRDDSASSDDDSSSAD");
