(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $timeout, $rootScope, $state, subscriptionService, exerciseService, workoutService) {
    var vm = this;
    vm.today = new Date("2016-09-23T00:00:00.000Z").toISOString();
    vm.tomorrow = new Date("2016-09-23T00:00:00.000Z").toString();
    vm.yesterday = new Date("2016-09-22T00:00:00.000Z");
    vm.eventsLoaded = false;
    vm.cancelSubscripton = cancelSubscripton;
    vm.calView = "month";
    vm.viewDate = new Date();
    vm.calTitle = "Test";

    vm.eventClicked = function(event) {
      $log.info('Clicked', angular.toJson(event._id));
    };

    activate();

    function activate() {
      if(!$rootScope.loggedInUser){
        $state.go('login');
      }
      // exerciseService.exercise.getAllExercises().then(function(list){
      //   $log.info("EXERCISES: " + angular.toJson(list.data));
      // });
      workoutService.workouts.getUserWorkouts($rootScope.loggedInUser._id).then(function(list2){
        vm.workouts = list2.data;
        //$log.info("WORKOUTS: " + angular.toJson(list2.data));
        vm.eventsLoaded = true;
      });
    }

    function cancelSubscripton(){
      subscriptionService.subscribe.cancelSubscripton($rootScope.loggedInUser.stripe_subscription).then(function(res){
        $log.info("CANCELED: " + angular.toJson(res));
      });
    }

  }
})();
