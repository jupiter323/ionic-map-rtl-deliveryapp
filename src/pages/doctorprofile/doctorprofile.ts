import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppointmentbookPage } from '../appointmentbook/appointmentbook';
import { AddfeedbackPage } from '../addfeedback/addfeedback';

@Component({
  selector: 'page-doctorprofile',
  templateUrl: 'doctorprofile.html'
})
export class DoctorprofilePage {
doctor: string = "about";
Short: string = "n1"; 

  constructor(public navCtrl: NavController) {
  
  }
  
   addfeedback(){
    this.navCtrl.push(AddfeedbackPage);
    }
     appointmentbook(){
    this.navCtrl.push(AppointmentbookPage);
    }

}
