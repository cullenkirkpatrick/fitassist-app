(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .controller('PricingController', PricingController);

  /** @ngInject */
  function PricingController($log, $rootScope, subscriptionService, usersService) {
    var vm = this;
    vm.activeNav = 'basic';
    vm.indNav = 'fit';
    vm.coachNav = 'basic';
    vm.createFitSubscriber = createFitSubscriber;
    vm.createNutritionSubscriber = createNutritionSubscriber;
    vm.createBasicSubscriber = createBasicSubscriber;
    vm.createProSubscriber = createProSubscriber;
    vm.createEliteSubscriber = createEliteSubscriber;

    activate();

    function activate() {

    }

    function createFitSubscriber(){
      StripeCheckout.open({
        key: 'pk_test_hWpoOVHfXAoTpGSGgeJAFgds',
        amount: 2000,
        name: 'Fitness Subscription',
        description: 'Fitness Plan ($20.00)',
        panelLabel: 'Sign Up Now',
        token: function(res) {
          subscriptionService.subscribe.fitIndividual(res.id).then(function(response){
            $log.info(response);
          });
        }
      });
    }

    function createNutritionSubscriber(){
      StripeCheckout.open({
        key: 'pk_test_hWpoOVHfXAoTpGSGgeJAFgds',
        amount: 3000,
        name: 'Fitness and Nutrition Subscription',
        description: 'Fitness and Nutrition Plan ($30.00)',
        panelLabel: 'Sign Up Now',
        token: function(res) {
          subscriptionService.subscribe.nutritionIndividual(res.id).then(function(response){
            var newUser = {
              username: "Cullen",
              password: "test",
              first_name: "Cullen",
              last_name: "Kirkpatrick",
              gender: "M",
              user_type: "Coach",
              stripe_cust: response.data.sources.data[0].customer,
              stripe_subscription: response.data.subscriptions.data[0].id,
              stripe_plan_id: response.data.subscriptions.data[0].plan.id,
              stripe_plan_name: response.data.subscriptions.data[0].plan.name
            };
            usersService.users.createUser(newUser).then(function(userAdded){
              $rootScope.loggedInUser = userAdded;
              $log.info("User created: " + angular.toJson(userAdded));
            });
          });
        }
      });
    }

    function createBasicSubscriber(){
      StripeCheckout.open({
        key: 'pk_test_hWpoOVHfXAoTpGSGgeJAFgds',
        amount: 1000,
        name: 'Basic Coaching Subscription',
        description: 'Basic Coach ($10.00)',
        panelLabel: 'Sign Up Now',
        token: function(res) {
          subscriptionService.subscribe.basicCoach(res.id).then(function(response){
            $log.info(response);
          });
        }
      });
    }

    function createProSubscriber(){
      StripeCheckout.open({
        key: 'pk_test_hWpoOVHfXAoTpGSGgeJAFgds',
        amount: 2000,
        name: 'Pro Coaching Subscription',
        description: 'Pro Coach ($20.00)',
        panelLabel: 'Sign Up Now',
        token: function(res) {
          subscriptionService.subscribe.proCoach(res.id).then(function(response){
            $log.info(response);
          });
        }
      });
    }

    function createEliteSubscriber(){
      StripeCheckout.open({
        key: 'pk_test_hWpoOVHfXAoTpGSGgeJAFgds',
        amount: 3500,
        name: 'Elite Coaching Subscription',
        description: 'Elite Coach ($35.00)',
        panelLabel: 'Sign Up Now',
        token: function(res) {
          subscriptionService.subscribe.eliteCoach(res.id).then(function(response){
            $log.info(response);
          });
        }
      });
    }

  }
})();
