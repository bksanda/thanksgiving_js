// compress(string)
// Use a pattern and consolidate the amount of characters into a simplified string

// input  pattern = "AAASSSDDDDRDDSASSDDDSSSAD"  
// output pattern = 3A3S4DR2DSA2S3D3SAD
// If a character is represented more than once, append the number of occurences in front of it. If a chracter is only represented once, just put that letter

// Hint Use a loop to iterate over a string. You can reference characters in a string similar to an array.

var count = 1;
function compress (string) {
	var newString = '';
	for (var i = 0; i<string.length; i++) {
		if (string[i] = string[i+1]) {
			count+=1;
		}
		else if(string[i]) != string[i+1]) {
			if (count >1) {
				count =1;
				newString += count + string[i];
			}
			else {
				newString += count + string[i];
			}	
		}				
	} return newString;
}
	

compress("AAASSSDDDDRDDSASSDDDSSSAD");