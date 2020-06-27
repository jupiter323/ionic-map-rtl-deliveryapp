import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChatscreenPage } from '../chatscreen/chatscreen';

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {

  constructor(public navCtrl: NavController) {

  }
  chatscreen(){
    this.navCtrl.push(ChatscreenPage);
    }


}
