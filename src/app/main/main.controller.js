(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $state) {
    //var vm = this;
    $rootScope.logout = logout;
    $rootScope.showNav = showNav;

    activate();

    function activate() {
      if(!$rootScope.loggedInUser){
        $state.go('login');
      }
    }

    function logout(){
      $rootScope.loggedInUser = undefined;
      $state.go('login');
    }

    function showNav(){
      $rootScope.showNavBool = !$rootScope.showNavBool;
    }

  }
})();
