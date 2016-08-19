System.register("index", ["angular2/core", "angular2/platform/browser", "fitassist-app"], function($__export) {
  "use strict";
  var Component,
      View,
      bootstrap,
      FitassistApp,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      FitassistApp = $__m.FitassistApp;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [FitassistApp],
            template: "\n    <fitassist-app></fitassist-app>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});
