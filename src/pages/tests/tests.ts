import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html'
})
export class TestsPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  
   dismiss() {
    this.viewCtrl.dismiss();
  }

}
