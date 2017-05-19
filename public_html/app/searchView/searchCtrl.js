'use strict';

angular.module('searchView', [])
.controller('SearchCtrl', ['$scope','SpotifyResource', 'CONSTANTS', function($scope, SpotifyResource, CONSTANTS) {
    $scope.CONSTANTS = CONSTANTS;
    
    $scope.search = {};
    $scope.search.text = '';
    $scope.search.type = 'artist';
    $scope.search.limit = 50;
    $scope.displayType = '';
    
    $scope.result = {};
    
    $scope.send = function (){
        
        $scope.result = SpotifyResource.search().get($scope.search, 
            function (res){
                if($scope.search.type == 'artist')
                    $scope.totalItems = res.artists.total;
                else
                    $scope.totalItems = res.albums.total;
            }
        );
 
        $scope.displayType = $scope.search.type;
        console.log($scope.result);
    }
}]);
