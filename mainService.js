
angular.module('assessment').service('mainService', function($http, $stateParams){
  
  
  this.getPets = function(){
    return $http({
    method: 'GET',
    url: 'http://practiceapi.devmounta.in/pets'
  })
  .then(function(response){
    return response.data;
  })
}
  
this.getPet = function(id) {
  return $http({
    method: "GET",
    url: 'http://practiceapi.devmounta.in/pets/' + id
  })
}
  
});