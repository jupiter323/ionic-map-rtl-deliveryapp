import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
location: string = "b1";

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
