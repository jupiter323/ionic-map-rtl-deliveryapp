import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChatwithdoctorPage } from '../chatwithdoctor/chatwithdoctor';

@Component({
  selector: 'page-appointmentbook',
  templateUrl: 'appointmentbook.html'
})
export class AppointmentbookPage {


  constructor(public navCtrl: NavController) {

  }
  
  chatwithdoctor(){
    this.navCtrl.push(ChatwithdoctorPage);
    }


}
