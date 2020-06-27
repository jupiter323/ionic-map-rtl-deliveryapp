import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { MedicaldetailPage } from '../medicaldetail/medicaldetail';

@Component({
  selector: 'page-medicalmap',
  templateUrl: 'medicalmap.html'
})
export class MedicalmapPage {
location:string = "b1";

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

   dismiss() {
    this.viewCtrl.dismiss();
  }
  
     medicaldetail(){
    this.navCtrl.push(MedicaldetailPage);
    }

}
