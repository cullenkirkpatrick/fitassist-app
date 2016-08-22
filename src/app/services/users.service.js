(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .factory('usersService', usersService);

    function usersService($http){

      var users = {

        createUser: function(user){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/users',
            data: user
          })
        }
      };

      return {
        users: users
      }

    }
})();
