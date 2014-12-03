// ASSIGNMENT#2
// zip(array, array2)
// Take two arrays, and combine them.

// Input

// var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
// var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];
// Output

// [ [ 'Passion Pit', 'Gossamer' ],
//   [ 'Mumford and Sons', 'Sigh no more' ],
//   [ 'MGMT', 'Time to Pretend' ] ]

var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];

var zip = function (array, array2){
	var combine = [];
	array.forEach(function(element, index){
		combine[index] = [element, array2[index]];	
	}); 
	return combine;
}
console.log(zip(artists, albums));
