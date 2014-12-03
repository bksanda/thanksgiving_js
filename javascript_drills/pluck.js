// ASSIGNMET #1
// pluck(someArray, "someKey")
// Using map construct a function called Pluck that will input array, 
//and grab all matching keys. The function should return the of keys in an array.

// Input

// var albums = [
//     {'name': 'Gossamer', 'artist': 'Passion Pit'},
//     {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
//     {'name': 'Time to Pretend', 'artist': 'MGMT'}
// ];
// Output

// [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]


var albums = [ {'name': 'Gossamer', 'artist': 'Passion Pit'}, 
				{'name': 'Sigh no more', 'artist': 'Mumford and Sons'}, 
				{'name': 'Time to Pretend', 'artist': 'MGMT'} ]

var pluck = function(someArray, someKey) {
	var newArtists = someArray.map(function(element, index){
		return element[someKey];
	}); return newArtists;	
}

console.log(pluck(albums, 'artist'));

