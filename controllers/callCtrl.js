angular
  .module('openVDO')
  .controller('callCtrl', ['$scope', '$stateParams', function($scope, $stateParams){
    // $scope.users = users.sort();

    $scope.nickname = $stateParams.nickname;

    /* Video */
    var video = $('video.me');
     
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
     
    if (navigator.getUserMedia) {       
      navigator.getUserMedia({video: true}, handleVideo, videoError);
    }
     
    function handleVideo(stream) {
      video.attr('src', window.URL.createObjectURL(stream));
    }
     
    function videoError(e) {
      // do something
    }
  }])