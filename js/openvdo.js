angular
  .module('openVDO', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('users', {
        url: '/',
        templateUrl: 'templates/users.html',
        controller: 'usersCtrl',
        resolve: {
          users: ['$http', function($http){
            return $http.get('api/users.json').then(function(response){
              return response.data;
            })
          }]
        }
      })
      .state('call', {
        url: '/call/:nickname',
        templateUrl: 'templates/call.html',
        controller: 'callCtrl'
        // controller: function($stateParams){
        //   console.log($stateParams.nickname);
        //   // expect($stateParams).toBe()
        // }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl',
      })
      

  }])










/*$('form.login').on('submit', function(e){
  e.preventDefault();
  $(this).hide();
  $('section.users').fadeIn();

  setTimeout(function(){
    $('.incoming').addClass('call');
  }, 5000);
})
*/
$('.incoming').on('click', function(){
  $(this).hide();
  $('section.users').hide();
  $('section.call').fadeIn();

})




