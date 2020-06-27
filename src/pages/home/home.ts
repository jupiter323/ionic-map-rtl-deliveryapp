import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChatwithdoctorPage } from '../chatwithdoctor/chatwithdoctor';
import { DestinationPage } from '../destination/destination';
import { LabPage } from '../lab/lab';
import { MedicalPage } from '../medical/medical';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
location: string = "n1";

  constructor(public navCtrl: NavController) {

  }

    chatwithdoctor(){
      this.navCtrl.push(ChatwithdoctorPage);
    }
  
    choose_destination(){
      this.navCtrl.push(DestinationPage);
    }

    lab(){
      this.navCtrl.push(LabPage);
    }
    medical(){
      this.navCtrl.push(MedicalPage);
    }

}
