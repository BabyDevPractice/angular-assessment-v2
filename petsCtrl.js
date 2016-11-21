angular.module('assessment').controller('petsCtrl', function($scope,mainService){
  
  $scope.getPets = function(){
    
      mainService.getPets().then(function(pets){
      $scope.pets = pets;
        console.log($scope.pets);
    });
  };
  $scope.getPets();

$scope.toggler = false;
  
});