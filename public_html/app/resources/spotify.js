'use strict';

angular.module('spotifyResources',['ngResource'])
.factory('SpotifyResource', ['$resource', 'CONSTANTS',function($resource, CONSTANTS) {
        var factory = {};
	var URL = CONSTANTS.SPOTIFY_SERVICE_URL;
        
        factory.search = function() {
            var list = $resource(URL+'?q=:text&type=:type&offset=0&limit=:limit', {text:'@text', type:'@type', limit: '@limit'});
                        
            return list;
	};
    return factory;
}]);