//isPrime(number)
//prime number can only be divided by itself or 1 
//Return true or false if a number is a prime number

// Initial attempt trying to figure out the math: 
// took some time: 
//=================================
// function isPrime(number) {
// 	for (var i = 2; i < number; i++) {
// 		if (number%i===0) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}
// };  

// console.log(isPrime(33));
//===================================

// Next attempt: 
// found some articles on Eratosthenes method
// did some more digging and found math.sqrt method

function isPrime(number) {
	for (var i = 2; i <= Math.sqrt(number); i++){
		if (number%i==0) {
			return false;
		} 
	} return true;
}

console.log(isPrime(53));

 
