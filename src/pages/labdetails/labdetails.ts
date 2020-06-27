import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TestsPage } from '../tests/tests';

@Component({
  selector: 'page-labdetails',
  templateUrl: 'labdetails.html'
})
export class LabdetailsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
 tests() {
    let modal = this.modalCtrl.create(TestsPage);
    modal.present();
  }
}
 