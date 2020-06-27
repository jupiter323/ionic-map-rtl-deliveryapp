import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { MedicalmapPage } from '../medicalmap/medicalmap';
import { MedicaldetailPage } from '../medicaldetail/medicaldetail';

@Component({
  selector: 'page-medical',
  templateUrl: 'medical.html'
})
export class MedicalPage {
location: string = "n1";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  

      medicalmap() {
    let modal = this.modalCtrl.create(MedicalmapPage);
    modal.present();
  }
    
     medicaldetail(){
    this.navCtrl.push(MedicaldetailPage);
    }

}
