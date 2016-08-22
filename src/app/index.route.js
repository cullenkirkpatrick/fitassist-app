(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('pricing', {
        url: '/pricing',
        templateUrl: 'app/information/pricing.html',
        controller: 'PricingController',
        controllerAs: 'vm'
      })
      .state('businfo', {
        url: '/info',
        templateUrl: 'app/information/bus-info.html',
        controller: 'BusInfoController',
        controllerAs: 'vm'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');

  }

})();
