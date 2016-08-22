(function() {
  'use strict';

  angular
    .module('fitassistApp')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, $http, $state, $rootScope, fitAppService) {
    var vm = this;
    vm.loginUser = loginUser;
    vm.getUsers = getUsers;

    activate();

    function activate() {
      vm.getUsers();
    }

    function loginUser(){
      $log.info("CALLED");
      fitAppService.login.loginUser().then(function(res){
        var response = res.data;
        if(response == 'Failed Login'){
          $log.info('Failed Login');
        }
        else if (response.name){
          $rootScope.loggedInUser = response;
          $log.info('User: ' + angular.toJson(response));
          $state.go('home');
        }
        $rootScope.showNavBool = false;
      })
    }

    function getUsers(){
      fitAppService.users.getAllUsers().then(function(res){
        vm.users = res.data;
      });
    }

  }
})();
