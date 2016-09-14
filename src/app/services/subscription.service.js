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

        cancelSubscripton: function(){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/cancel_subscription'
          })
        },

        updateSubscripton: function(sub_id){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/update_subscripton',
            data: {
              sub_id: sub_id
            }
          })
        }

      };

      return {
        subscribe: subscribe
      }

    }
})();
