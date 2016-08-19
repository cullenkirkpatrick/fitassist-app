(function() {
  'use strict';

  angular
    .module('fitassistApp.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, Angularytics) {

    $log.debug('runBlock end');

    Angularytics.init();

  }

})();
