import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppointmentdetailPage } from '../appointmentdetail/appointmentdetail';

@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html'
})
export class AppointmentPage {

  constructor(public navCtrl: NavController) {

  }
  appointmentdetail(){
    this.navCtrl.push(AppointmentdetailPage);
    }
}
