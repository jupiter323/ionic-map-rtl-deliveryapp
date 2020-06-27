import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { MapPage } from '../map/map';
import { FilterPage } from '../filter/filter';
import { DoctorprofilePage } from '../doctorprofile/doctorprofile';
@Component({
  selector: 'page-doctroslist',
  templateUrl: 'doctroslist.html'
})
export class DoctroslistPage {
location: string = "b1";
category: string = "a1";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
    
    map() {
    let modal = this.modalCtrl.create(MapPage);
    modal.present();
  }
  
  filter() {
    let modal = this.modalCtrl.create(FilterPage);
    modal.present();
  }
  
   doctorprofile(){
    this.navCtrl.push(DoctorprofilePage);
    }


}
