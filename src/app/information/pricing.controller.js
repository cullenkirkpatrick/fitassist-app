(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .controller('PricingController', PricingController);

  /** @ngInject */
  function PricingController($log, $rootScope, $state, subscriptionService, usersService, fitAppService) {
    var vm = this;
    vm.activeNav = 'basic';
    vm.indNav = 'fit';
    vm.coachNav = 'basic';
    vm.createFitSubscriber = createFitSubscriber;
    vm.createNutritionSubscriber = createNutritionSubscriber;

    activate();

    function activate() {

    }

    function createFitSubscriber(){
      StripeCheckout.open({
        key: 'pk_test_hWpoOVHfXAoTpGSGgeJAFgds',
        amount: 1000,
        name: 'Fitness Subscription',
        description: 'Fitness Plan ($10.00)',
        panelLabel: 'Sign Up Now',
        token: function(res) {
          subscriptionService.subscribe.fitIndividual(res.id).then(function(response){
            var newUser = {
              username: vm.username,
              password: vm.password,
              first_name: vm.first_name,
              last_name: vm.last_name,
              gender: "M",
              user_type: "Individual",
              stripe_cust: response.data.sources.data[0].customer,
              stripe_subscription: response.data.subscriptions.data[0].id,
              stripe_plan_id: response.data.subscriptions.data[0].plan.id,
              stripe_plan_name: response.data.subscriptions.data[0].plan.name
            };
            usersService.users.createUser(newUser).then(function(userAdded){
              fitAppService.login.loginUser(vm.username, vm.password).then(function(res){
                var response = res.data;
                if(response == 'Failed Login'){
                  $log.info('Failed Login');
                }
                else if (response.username){
                  $rootScope.loggedInUser = response;
                  $state.go('home');
                }
                $rootScope.showNavBool = false;
              });
            });
          });
        }
      });
    }

    function createNutritionSubscriber(){
      StripeCheckout.open({
        key: 'pk_test_hWpoOVHfXAoTpGSGgeJAFgds',
        amount: 1500,
        name: 'Fitness and Nutrition Subscription',
        description: 'Fitness and Nutrition Plan ($30.00)',
        panelLabel: 'Sign Up Now',
        token: function(res) {
          subscriptionService.subscribe.nutritionIndividual(res.id).then(function(response){
            var newUser = {
              username: vm.username,
              password: vm.password,
              first_name: vm.first_name,
              last_name: vm.last_name,
              gender: "M",
              user_type: "Individual Nutrition",
              stripe_cust: response.data.sources.data[0].customer,
              stripe_subscription: response.data.subscriptions.data[0].id,
              stripe_plan_id: response.data.subscriptions.data[0].plan.id,
              stripe_plan_name: response.data.subscriptions.data[0].plan.name
            };
            usersService.users.createUser(newUser).then(function(userAdded){
              fitAppService.login.loginUser(vm.username, vm.password).then(function(res){
                var response = res.data;
                if(response == 'Failed Login'){
                  $log.info('Failed Login');
                }
                else if (response.username){
                  $rootScope.loggedInUser = response;
                  $state.go('home');
                }
                $rootScope.showNavBool = false;
              });
            });
          });
        }
      });
    }
  }
})();
