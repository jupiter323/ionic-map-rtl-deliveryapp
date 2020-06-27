import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html'
})
export class TermsPage {
tnc: string = "tc";

  constructor(public navCtrl: NavController) {

  }

}
