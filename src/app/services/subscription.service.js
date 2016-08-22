(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .factory('subscriptionService', subscriptionService);

    function subscriptionService($http){

      var subscribe = {

        fitIndividual: function(token){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/new_fit_individual',
            data: {
              token: token
            }
          })
        },

        nutritionIndividual: function(token){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/new_nutrition_individual',
            data: {
              token: token
            }
          })
        },

        basicCoach: function(token){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/new_basic_coach',
            data: {
              token: token
            }
          })
        },

        proCoach: function(token){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/new_pro_coach',
            data: {
              token: token
            }
          })
        },

        eliteCoach: function(token){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/new_elite_coach',
            data: {
              token: token
            }
          })
        }
      };

      return {
        subscribe: subscribe
      }

    }
})();
