System.register("fitassist-app", ["angular2/core"], function($__export) {
  "use strict";
  var Component,
      View,
      FitassistApp;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }],
    execute: function() {
      FitassistApp = function() {
        function FitassistApp() {
          console.info('FitassistApp Component Mounted Successfully');
        }
        return ($traceurRuntime.createClass)(FitassistApp, {}, {});
      }();
      $__export("FitassistApp", FitassistApp);
      Object.defineProperty(FitassistApp, "annotations", {get: function() {
          return [new Component({selector: 'fitassist-app'}), new View({templateUrl: 'fitassist-app.html'})];
        }});
    }
  };
});
