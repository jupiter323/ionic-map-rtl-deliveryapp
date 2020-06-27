import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SpecilitiesPage } from '../specilities/specilities';

@Component({
  selector: 'page-finddoctor',
  templateUrl: 'finddoctor.html'
})
export class FinddoctorPage {
location: string = "n1";

  constructor(public navCtrl: NavController) {

  }
  
    specilities(){
    this.navCtrl.push(SpecilitiesPage);
    }

}
