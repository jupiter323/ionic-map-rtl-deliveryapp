import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReadblogPage } from '../readblog/readblog';

@Component({
  selector: 'page-blogs',
  templateUrl: 'blogs.html'
})
export class BlogsPage {

  constructor(public navCtrl: NavController) {

  }
  
    readblog(){
    this.navCtrl.push(ReadblogPage);
    }

}
