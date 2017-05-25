'use strict';

angular.module('spotifyResources',['ngResource'])
.factory('SpotifyResource', ['$resource', 'CONSTANTS',function($resource, CONSTANTS) {
        var factory = {};
	var URL = CONSTANTS.SPOTIFY_SERVICE_URL;
        
        factory.search = function() {
            var list = $resource(URL+'search?q=:text&type=:type&offset=0&limit=:limit', {text:'@text', type:'@type', limit: '@limit'});
            return list;
	};
        
        factory.getArtistAlbums = function() {
            var list = $resource(URL+'artists/:id/albums', {id:'@id'});
            return list;
	};
        
        factory.getAlbumTracks = function() {
            var list = $resource(URL+'albums/:id', {id:'@id'});
            return list;
	};

    return factory;
}]);