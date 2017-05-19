'use strict';

var configModule = angular.module('configModule', []);

	var CONTEXT_ROOT_WEB = '/spotify-search/';


	var CONSTANTS = {
		'HOME_PAGE' : CONTEXT_ROOT_WEB,
                'SPOTIFY_SERVICE_URL': 'https://api.spotify.com/v1/search',
                'SEARCH_PATH': 'search'
	};

	configModule.constant('CONSTANTS', CONSTANTS);