angular
  .module('openVDO')
  .controller('usersCtrl', ['$scope', 'users', function($scope, users){
    $scope.users = users.sort();

    setTimeout(function(){
      $('.incoming').addClass('call');
    }, 5000);
    
    $scope.firstLetter = function(name) {
      return name.charAt(0).toUpperCase();
    }
  }])