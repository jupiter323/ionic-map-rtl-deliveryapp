import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DoctroslistPage } from '../doctroslist/doctroslist';

@Component({
  selector: 'page-specilities',
  templateUrl: 'specilities.html'
})
export class SpecilitiesPage {
location: string = "n1";
  constructor(public navCtrl: NavController) {

  }

  doctroslist(){
    this.navCtrl.push(DoctroslistPage);
    }

}
