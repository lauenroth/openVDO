angular
  .module('openVDO')
  .controller('callCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
    // $scope.users = users.sort();

    $scope.nickname = $stateParams.nickname;
  }])