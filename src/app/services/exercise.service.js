(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .factory('exerciseService', exerciseService);

    function exerciseService($http){

      var exercise = {

        getAllExercises: function(){
          return $http({
            method: 'GET',
            url: 'http://localhost:3001/exercises'
          })
        },

        createExercise: function(exercise){
          return $http({
            method: 'POST',
            url: 'http://localhost:3001/exercises',
            data: exercise
          })
        }
      };

      return {
        exercise: exercise
      }

    }
})();
