(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .factory('fitAppService', fitAppService);

    function fitAppService($http){

      var login = {

        loginUser: function(username, password){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/login',
            params: {
              username: username,
              password: password
            }
          })
        }
      };

      var users = {

        getAllUsers: function(){
          return $http({
            method: 'GET',
            url: 'http://localhost:3001/users'
          })
        }
      };

      return {
        login: login,
        users: users
      }

    }
})();
