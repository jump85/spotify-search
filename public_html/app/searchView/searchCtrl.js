'use strict';


angular.module('searchView', [])
.controller('SearchCtrl', ['$scope','SpotifyResource', 'CONSTANTS', function($scope, SpotifyResource, CONSTANTS) {
    $scope.CONSTANTS = CONSTANTS;
    
    $scope.search = {};
    $scope.search.text = '';
    $scope.search.type = 'artist,album';
    $scope.search.limit = 20;
    $scope.search.displayResults = false;
    $scope.modalShown = false;
    $scope.currentItem = {};
    $scope.totalItems = 0;
    
    $scope.result = {};
    
    $scope.send = function (){
        if($scope.search.text.length > 1 && $scope.search.text.length < 30) {
            $scope.search.displayResults = true;
            $scope.result = SpotifyResource.search().get($scope.search, 
                function (res){
                    $scope.totalItems = res.artists.total + res.albums.total;
                }
            );
        }
 
        $scope.displayType = $scope.search.type;
        //console.log($scope.result);
    }
    
    $scope.toggleModal = function(item) {
        $scope.modalShown = !$scope.modalShown;
        
        if($scope.modalShown && item){
            $scope.currentItem = item;
            $scope.currentItem.modalData = {};
        
            if(item.type == 'album'){
                $scope.currentItem.modalData = SpotifyResource.getAlbumTracks().get(item);
            }else if (item.type == 'artist'){
                $scope.currentItem.modalData = SpotifyResource.getArtistAlbums().get(item);
            }
            //console.log($scope.currentItem);
        }else{
            $scope.currentItem = {};
        }
    };
    
    $scope.hideModal = function(){
        $scope.modalShown = false;
    }
}]);
