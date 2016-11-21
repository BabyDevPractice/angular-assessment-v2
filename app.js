angular.module('assessment', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    // 
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'mainCtrl'
    
      })
      .state('pets', {
        url: '/pets',
        templateUrl: './views/pets.html',
        controller: 'petsCtrl'
    
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './views/blog.html',
        controller: 'blogCtrl'
    
      })
      
      .state('about', {
        url: '/about',
        templateUrl: './views/about.html',
        controller: 'aboutCtrl'
    
      })
      
      .state('bio', {
        url: '/bio/:id',
        templateUrl: './views/pet-bio.html',
        controller: 'bioCtrl'
    
      })

      

  
  
});