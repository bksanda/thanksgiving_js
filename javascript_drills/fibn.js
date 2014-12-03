// fib(n)
// Write a method to return the 
//Nth number of Fibonacci sequence.
//http://en.wikipedia.org/wiki/Fibonacci_number
//formula: F(n)=F(n-1) + F(n-2).
//F0 = 0
//F1 = 1
//F2 = 1
//1,1,2,3,5,8,13,21...


var fibNumber = [];
function fib(n) {
	for (var i = 0; i < n; i++) {
		if (i < 2) {
            fibNumber[i] = 1
        } else {
		fibNumber[i] = fibNumber[i-1] + fibNumber[i-2];
		}
	}return fibNumber; 
}

console.log(fib(8));


