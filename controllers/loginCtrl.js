angular
  .module('openVDO')
  .controller('loginCtrl', ['$scope', '$state', function($scope, $state){

    $scope.onLoginSubmit = function() {

      // todo: check if nickname is still available
      $state.go('users');
    }
  }])