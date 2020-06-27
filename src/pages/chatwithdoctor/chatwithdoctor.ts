import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-chatwithdoctor',
  templateUrl: 'chatwithdoctor.html'
})
export class ChatwithdoctorPage {
Treatment: string = "v1";

  constructor(public navCtrl: NavController) {

  }

}
