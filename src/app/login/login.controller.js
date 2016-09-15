(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, $http, $state, $rootScope, fitAppService) {
    var vm = this;
    $rootScope.logout = logout;
    $rootScope.showNav = showNav;
    vm.loginUser = loginUser;
    vm.getUsers = getUsers;

    activate();

    function activate() {
      vm.getUsers();
    }

    function loginUser(){
      $log.info("CALLED");
      fitAppService.login.loginUser(vm.username, vm.password).then(function(res){
        var response = res.data;
        if(response == 'Failed Login'){
          $log.info('Failed Login');
        }
        else if (response.username){
          if(response.user_type == 'Individual' || response.user_type == 'Individual Nutrition'){
            $state.go('home');
          }
          else if(response.user_type == 'Admin'){
            $state.go('admin-home');
          }
          $rootScope.loggedInUser = response;
        }
        $rootScope.showNavBool = false;
      })
    }

    function getUsers(){
      fitAppService.users.getAllUsers().then(function(res){
        vm.users = res.data;
      });
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
