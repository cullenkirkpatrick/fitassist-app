(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .factory('fitAppService', fitAppService);

    function fitAppService($http){

      var login = {

        loginUser: function(){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/login',
            params: {
              username: "TestCoach",
              password: "TestCoach"
            }
          })
        }
      };

      var users = {

        getAllUsers: function(){
          return $http({
            method: 'GET',
            url: 'http://localhost:3001/getusers'
          })
        }
      };

      return {
        login: login,
        users: users
      }

    }
})();
