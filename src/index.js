import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {FitassistApp} from 'fitassist-app';

@Component({
  selector: 'main'
})

@View({
  directives: [FitassistApp],
  template: `
    <fitassist-app></fitassist-app>
  `
})

class Main {

}

bootstrap(Main);
