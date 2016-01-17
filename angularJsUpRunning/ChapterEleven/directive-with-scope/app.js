angular.module('musicApp', [])
	.controller('musicController', [ function(){
		var self = this;
		self.songs = [
			{ title: 'Fernando', artist: 'ABBA', duration: '04:17', uk: 101, usa: 134, eu: 351},
			{ title: 'Waterloo', artist: 'ABBA', duration: '02:49', uk: 96, usa: 181, eu: 327},
			{ title: 'Rock Around the Clock', artist: 'Bill Haley & His Comets', duration: '02:14', uk: 81, usa: 201, eu: 218 },
			{ title: 'White Christmas', artist:	'Bing Crosby', duration: '03:06', uk: 56, usa: 291, eu: 203 },
			{ title: 'Are You Lonesome Tonight?', artist: 'Elvis Presley', duration: '03:09', uk: 61, usa: 498, eu: 167 },
			{ title: 'Blue Suede Shoes', artist: 'Elvis Presley', duration: '01:58', uk: 87, usa: 350, eu: 186},
			{ title: 'Hound Dog', artist: 'Elvis Presley', duration: '02:16', uk: 98, usa: 310, eu: 196},
			{ title: 'Another One Bites the Dust', artist:	'Queen', duration: '03:36', uk: 120, usa: 197, eu: 291},
			{ title: 'Bohemian Rhapsody', artist:	'Queen', duration: '05:56', uk: 99, usa: 219, eu: 310},
			{ title: 'Hey Jude', artist: 'The Beatles',	duration: '07:11', uk: 123, usa: 113, eu: 246},
			{ title: 'I Want to Hold Your Hand', artist: 'The Beatles',	duration: '02:28', uk: 131, usa: 99, eu: 295},
			{ title: 'She Loves You', artist: 'The Beatles', duration: '02:22', uk: 142, usa: 120, eu: 278},
			{ title: 'Torn', artist: 'Natalie Imbruglia', duration: '04:05',  uk: 123, usa: 217, eu: 215 }
		];
	}]);