import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppointmentdetailPage } from '../appointmentdetail/appointmentdetail';

@Component({
  selector: 'page-appts',
  templateUrl: 'appts.html'
})
export class ApptsPage {

  constructor(public navCtrl: NavController) {

  }
   appointmentdetail(){
    this.navCtrl.push(AppointmentdetailPage);
    }

}
