angular
  .module('openVDO')
  .factory('Users', function() {
    get: function() {
      return [
        {"letter": "C", "users": ["CIA", "Cosmin"]},
        {"letter": "G", "users": ["Ghostbusters", "God"]},
        {"letter": "J", "users": ["Jörg"]},
        {"letter": "O", "users": ["OpenSource", "OpenVDO"]}
      ]
    }
  })