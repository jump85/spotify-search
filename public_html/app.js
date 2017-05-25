'use strict';

angular.module('SpotifyWebApp', [
  'ui.router',
  'configModule',
  'spotifyResources',
  'modalDirectives',
  //'headerView',
  'searchView'
]).
config(function($stateProvider, $urlRouterProvider, CONSTANTS) {
  $urlRouterProvider.otherwise("/search");

  $stateProvider
    .state(CONSTANTS.SEARCH_PATH, {
      url: "/" + CONSTANTS.SEARCH_PATH,
      templateUrl: "app/searchView/search.html"
    });
});
