//ASSIGNMENT #3

// pair(obj)
// Construct array pairs from Objects.

// You can grab all keys using Object.keys(obj) 
// and iterate over it like any other array.

// Input

// var obj = {
//     "Anil": "Bridgpal",
//     "Sarah": "Hanley",
//     "Lenny": "Urbanowski",
// }
// Output

// [ [ 'Anil', 'Bridgpal' ],
//   [ 'Sarah', 'Hanley' ],
//   [ 'Lenny', 'Urbanowski' ] ]



var pair = function (newObj){
	var objKeys = Object.keys(newObj);
	var outputArray = [];
	objKeys.forEach(function (element, index){
		outputArray.push([element, newObj[element]]);
	});
	return outputArray;
}

var obj = {
    "Anil": "Bridgpal",
    "Sarah": "Hanley",
    "Lenny": "Urbanowski",
}

console.log(pair(obj));

// var pair = function (){
// 	Object.keys(obj)
	
// }
// console.log(pair());
