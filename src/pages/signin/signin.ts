import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { HomePage } from '../home/home';

import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
 login: string = "signin";

  param = { value: 'world' };
  private translate: TranslateService;
  
  constructor(public navCtrl: NavController, translate: TranslateService) {
    this.translate = translate;
    translate.setDefaultLang("en");
  }

  tabs(){
    this.navCtrl.push(TabsPage);
  }
  forgotpassword(){
    this.navCtrl.push(ForgotpasswordPage);
  }
  
  location(){
    this.navCtrl.setRoot(HomePage);
  }

}
