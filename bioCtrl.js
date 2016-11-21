angular.module('assessment').controller('bioCtrl', function($scope, mainService, $stateParams){

  $scope.petId= $stateParams.id;
  console.log($scope.petId);


  $scope.getPet = function(){
    
      mainService.getPet($scope.petId).then(function(pet){
      $scope.pet = pet.data;
        console.log($scope.pet);
    });
  };
  $scope.getPet();



});
