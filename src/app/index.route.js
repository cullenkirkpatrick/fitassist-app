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
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('admin-home', {
        url: '/admin-home',
        templateUrl: 'app/admin/admin-home.html',
        controller: 'AdminHomeController',
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
      .state('history', {
        url: '/history',
        templateUrl: 'app/history/history.html',
        controller: 'HistoryController',
        controllerAs: 'vm'
      })
      .state('analysis', {
        url: '/analysis',
        templateUrl: 'app/analysis/analysis.html',
        controller: 'AnalysisController',
        controllerAs: 'vm'
      })
      .state('nutrition', {
        url: '/nutrition',
        templateUrl: 'app/nutrition/nutrition.html',
        controller: 'NutritionController',
        controllerAs: 'vm'
      })
      .state('admin-application', {
        url: '/admin-application',
        templateUrl: 'app/admin/application.html',
        controller: 'AdminApplicationController',
        controllerAs: 'vm'
      })
      .state('admin-users', {
        url: '/admin-users',
        templateUrl: 'app/admin/users.html',
        controller: 'AdminUsersController',
        controllerAs: 'vm'
      })
      .state('admin-plans', {
        url: '/admin-plans',
        templateUrl: 'app/admin/plans.html',
        controller: 'AdminPlansController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');

  }

})();
