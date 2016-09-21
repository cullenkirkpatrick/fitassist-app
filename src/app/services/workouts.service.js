(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .factory('workoutService', workoutService);

    function workoutService($http){

      var workouts = {

        getAllWorkouts: function(){
          return $http({
            method: 'GET',
            url: 'http://localhost:3001/workouts'
          })
        },

        getUserWorkouts: function(id){
          return $http({
            method: 'GET',
            url: 'http://localhost:3001/workouts/' + id
          })
        },

        createWorkouts: function(workout){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/workouts',
            data: workout
          })
        }
      };

      return {
        workouts: workouts
      }

    }
})();
