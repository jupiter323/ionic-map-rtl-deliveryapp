import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { MyfeedbacksPage } from '../myfeedbacks/myfeedbacks';
import { BlogsPage } from '../blogs/blogs';
import { AboutusPage } from '../aboutus/aboutus';
import { TermsPage } from '../terms/terms';
import { HelpPage } from '../help/help';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {

  }
  profile(){
    this.navCtrl.push(ProfilePage);
    }
    
  myfeedbacks(){
    this.navCtrl.push(MyfeedbacksPage);
    } 
    
  blogs(){
    this.navCtrl.push(BlogsPage);
    }
  aboutus(){
    this.navCtrl.push(AboutusPage);
    }
  terms(){
    this.navCtrl.push(TermsPage);
    }
  help(){
    this.navCtrl.push(HelpPage);
    }
    
    setting(){
    this.navCtrl.push(SettingsPage);
    }


}
