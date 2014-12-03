// printPrime(number)
// Take a number, and print all primes up to and including that number.
// function isPrime(number) {
// function isPrime(number) {
// 	for (var i = 2; i <= Math.sqrt(number); i++){
// 		if (number%i==0) {
// 			return false;
// 		} 
// 	} return true;
// }

// console.log(isPrime(53));

// function printPrime(number) {
// 	if (isPrime(number)===true) {
// 		console.log(number);
// 	} 
// }

// function printingPrimeNumbers(numbers){
//     for (i=1; i<=numbers; i++){
//        printPrime(i);
//    }
// }

// var amount = 100;
// printNumbers(amount);
// =============================================

function isPrime(number) {
	for (var i = 2; i <= Math.sqrt(number); i++){
		if (number%i==0) {
			return false; //not prime
		} 
	} return true; // prime
}	

function printPrime(number) {
	for (var j = 2; j <= number; j++) {
		if (isPrime(j)===true) {
			console.log(j);
		}
	}
	
}

printPrime(886);	


