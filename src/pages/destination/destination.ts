import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { LabdetailsPage } from '../labdetails/labdetails';
import { TestsPage } from '../tests/tests';

@Component({
  selector: 'page-destination',
  templateUrl: 'destination.html'
})
export class DestinationPage {
location: string = "n1";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
    labdetails(){
      this.navCtrl.push(LabdetailsPage);
    }
    
    tests(){
      let modal = this.modalCtrl.create(TestsPage);
      modal.present();
    }

}
