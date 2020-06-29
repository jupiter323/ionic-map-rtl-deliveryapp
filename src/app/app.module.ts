import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AccountPage } from '../pages/account/account';
import { ChatsPage } from '../pages/chats/chats';
import { HomePage } from '../pages/home/home';
import { ApptsPage } from '../pages/appts/appts';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { LocationPage } from '../pages/location/location';
import { FinddoctorPage } from '../pages/finddoctor/finddoctor';
import { SpecilitiesPage } from '../pages/specilities/specilities';
import { DoctroslistPage } from '../pages/doctroslist/doctroslist';
import { MapPage } from '../pages/map/map';
import { FilterPage } from '../pages/filter/filter';
import { DoctorprofilePage } from '../pages/doctorprofile/doctorprofile';
import { FeedbackPage } from '../pages/feedback/feedback';
import { AppointmentPage } from '../pages/appointment/appointment';
import { AppointmentbookPage } from '../pages/appointmentbook/appointmentbook';
import { AddfeedbackPage } from '../pages/addfeedback/addfeedback';
import { ChatwithdoctorPage } from '../pages/chatwithdoctor/chatwithdoctor';
import { LabPage } from '../pages/lab/lab';
import { DestinationPage } from '../pages/destination/destination';
import { LabdetailsPage } from '../pages/labdetails/labdetails';
import { TestsPage } from '../pages/tests/tests';
import { MedicalPage } from '../pages/medical/medical';
import { MedicalmapPage } from '../pages/medicalmap/medicalmap';
import { MedicaldetailPage } from '../pages/medicaldetail/medicaldetail';
import { AppointmentdetailPage } from '../pages/appointmentdetail/appointmentdetail';
import { ChatscreenPage } from '../pages/chatscreen/chatscreen';
import { ProfilePage } from '../pages/profile/profile';
import { MyfeedbacksPage } from '../pages/myfeedbacks/myfeedbacks';
import { BlogsPage } from '../pages/blogs/blogs';
import { ReadblogPage } from '../pages/readblog/readblog';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { TermsPage } from '../pages/terms/terms';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/src/translate.service';
import { Http } from '@angular/http';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';

export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    ChatsPage,
    HomePage,
    ApptsPage,
    TabsPage,
    SigninPage,
    ForgotpasswordPage,
    LocationPage,
    FinddoctorPage,
    SpecilitiesPage,
    DoctroslistPage,
    AppointmentbookPage,
    MapPage,
    FilterPage,
    DoctorprofilePage,
    FeedbackPage,
    AppointmentPage,
    AddfeedbackPage,
    ChatwithdoctorPage,
    LabPage,
    LabdetailsPage,
    DestinationPage,
    TestsPage,
    MedicalPage,
    MedicalmapPage,
    MedicaldetailPage,
    AppointmentdetailPage,
    ChatscreenPage,
    ProfilePage,
    MyfeedbacksPage,
    BlogsPage,
    ReadblogPage,
    AboutusPage,
    TermsPage,
    HelpPage,
    SettingsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    ChatsPage,
    HomePage,
    ApptsPage,
    TabsPage,
    SigninPage,
    ForgotpasswordPage,
    LocationPage,
    FinddoctorPage,
    SpecilitiesPage,
    DoctroslistPage,
    AppointmentbookPage,
    MapPage,
    FilterPage,
    DoctorprofilePage,
    FeedbackPage,
    AppointmentPage,
    AddfeedbackPage,
    ChatwithdoctorPage,
    LabPage,
    LabdetailsPage,
    DestinationPage,
    TestsPage,
    MedicalPage,
    MedicalmapPage,
    MedicaldetailPage,
    AppointmentdetailPage,
    ChatscreenPage,
    ProfilePage,
    MyfeedbacksPage,
    BlogsPage,
    ReadblogPage,
    AboutusPage,
    TermsPage,
    HelpPage,
    SettingsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
