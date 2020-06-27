import { Component } from '@angular/core';

import { AccountPage } from '../account/account';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { AppointmentPage } from '../appointment/appointment';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AppointmentPage;
  tab3Root = SettingsPage;
  tab4Root = AccountPage;

  constructor() {

  }
}
