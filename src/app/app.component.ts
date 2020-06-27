import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//import { TabsPage } from '../pages/tabs/tabs';
//import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
//import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
//import { LocationPage } from '../pages/location/location';
//import { FinddoctorPage } from '../pages/finddoctor/finddoctor';
//import { SpecilitiesPage } from '../pages/specilities/specilities';
//import { DoctroslistPage } from '../pages/doctroslist/doctroslist';
//import { MapPage } from '../pages/map/map';
//import { FilterPage } from '../pages/filter/filter';
//import { DoctorprofilePage } from '../pages/doctorprofile/doctorprofile';
//import { FeedbackPage } from '../pages/feedback/feedback';
//import { AppointmentPage } from '../pages/appointment/appointment';
//import { AppointmentbookPage } from '../pages/appointmentbook/appointmentbook';
//import { AddfeedbackPage } from '../pages/addfeedback/addfeedback';
//import { ChatwithdoctorPage } from '../pages/chatwithdoctor/chatwithdoctor';
//import { LabPage } from '../pages/lab/lab';
//import { LabdetailsPage } from '../pages/labdetails/labdetails';
//import { TestsPage } from '../pages/tests/tests';
//import { MedicalPage } from '../pages/medical/medical';
//import { MedicalmapPage } from '../pages/medicalmap/medicalmap';
//import { MedicaldetailPage } from '../pages/medicaldetail/medicaldetail';
//import { AppointmentdetailPage } from '../pages/appointmentdetail/appointmentdetail';
//import { ChatscreenPage } from '../pages/chatscreen/chatscreen';
//import { ProfilePage } from '../pages/profile/profile';
//import { MyfeedbacksPage } from '../pages/myfeedbacks/myfeedbacks';
//import { BlogsPage } from '../pages/blogs/blogs';
//import { ReadblogPage } from '../pages/readblog/readblog';
//import { AboutusPage } from '../pages/aboutus/aboutus';
//import { TermsPage } from '../pages/terms/terms';
//import { HelpPage } from '../pages/help/help';
//import { SettingsPage } from '../pages/settings/settings';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide();
    });
  }
}
