import {Component, View} from 'angular2/core';

@Component({
  selector: 'fitassist-app'
})

@View({
  templateUrl: 'fitassist-app.html'
})

export class FitassistApp {

  constructor() {
    console.info('FitassistApp Component Mounted Successfully');
  }

}
