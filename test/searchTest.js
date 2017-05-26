describe('SearchCtrl', function() {
  beforeEach(module('SpotifyWebApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.send', function() {
    var $scope;

    beforeEach(function() {
      $scope = {};
      controller = $controller('SearchCtrl', { $scope: $scope });
    });

    it('sets the displayResults to true if the search text length is greater than 0', function() {
      $scope.search.text = 'hekbnegbne';
      $scope.send();
      expect($scope.search.displayResults).toEqual(true);
    });
    
    it('sets the displayResults to false if the search text length is lower than 2', function() {
      $scope.search.text = '';
      $scope.send();
      expect($scope.search.displayResults).toEqual(false);
    });
    
    it('sets the displayResults to false if the search text length is lower than 30', function() {
      $scope.search.text = 'alksnglwnrwkwlgwrgwrlknglrbvrklmnrgergernmlksdsfgsdknss';
      $scope.send();
      expect($scope.search.displayResults).toEqual(false);
    });
  });
});