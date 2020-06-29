import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { HomePage } from '../home/home';

import { TranslateService } from 'ng2-translate';
import { ApiProvider } from './../../providers/api/api';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  login: string = "signin";

  param = { value: 'world' };
  private translate: TranslateService;

  constructor(public navCtrl: NavController, translate: TranslateService, private api: ApiProvider) {
    this.translate = translate;
    translate.setDefaultLang("en");
  }

  tabs() {

    var data = JSON.stringify({ "civilId": "111111111111", "password": "abc", "deviceId": "35 326607 029373 3" });
    this.api.post('login', data).share().map((resp: any) => resp.json()).subscribe(res => console.log('response from api :', res), err => console.log('error :', err));
    this.navCtrl.push(TabsPage);
  }
  forgotpassword() {
    this.navCtrl.push(ForgotpasswordPage);
  }

  location() {
    this.navCtrl.setRoot(HomePage);
  }

}
