webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointment_appointment__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__appointment_appointment__["a" /* AppointmentPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__account_account__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="My appointment" tabIcon="md-calendar" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Properties" tabIcon="md-chatboxes" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="My account" tabIcon="md-person" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\settings\settings.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Properties\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div class="bg-white">\n        <p class="text-primary">Alert properties</p>\n        <ion-item>\n            <ion-label>Appointments<small>Caution when receiving appointment information</small></ion-label>\n            <ion-toggle color="primary" checked="true"></ion-toggle>\n        </ion-item>\n        <ion-item>\n            <ion-label>Messages<small>Caution when receiving messages</small></ion-label>\n            <ion-toggle color="primary" checked="true"></ion-toggle>\n        </ion-item>\n        <ion-item>\n            <ion-label>Offer & updates<small>Analert when receiving offers or updates</small></ion-label>\n            <ion-toggle color="primary" checked="true"></ion-toggle>\n        </ion-item>\n    </div>\n    <div class="fix-btn"><button ion-button full class="btn text-success">Logout <ion-icon name="md-log-out"></ion-icon></button></div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatwithdoctor_chatwithdoctor__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__destination_destination__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lab_lab__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__medical_medical__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.location = "n1";
    }
    HomePage.prototype.chatwithdoctor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatwithdoctor_chatwithdoctor__["a" /* ChatwithdoctorPage */]);
    };
    HomePage.prototype.choose_destination = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__destination_destination__["a" /* DestinationPage */]);
    };
    HomePage.prototype.lab = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__lab_lab__["a" /* LabPage */]);
    };
    HomePage.prototype.medical = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__medical_medical__["a" /* MedicalPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <span><small margin-right>Location</small>\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n                <small>Location</small>\n                <ion-option value="n1">Wallington</ion-option>\n                <ion-option value="n2">Nerobi</ion-option>\n                <ion-option value="n3">Central Park</ion-option>\n              </ion-select>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div align="center" style="margin-top:20px;">\n        <img src="assets/imgs/logo.png" width="30%">\n    </div>\n    <div class="book-now"><button (click)="choose_destination()" ion-button full class="btn success">Book an appointment Now</button></div>\n    <div class="">\n        <ion-list class="doctor-list">\n            <ion-row class="bg-white">\n                <ion-col text-center class="date">\n                    <small>WED</small>\n                    <strong class="text-primary">12</strong>\n                    <small>12:00</small>\n                </ion-col>\n                <ion-col>\n                    <ion-card>\n                        <ion-item>\n                            <ion-avatar item-start>\n                                <img src="assets/imgs/nakta.png">\n                            </ion-avatar>\n                            <h2>National bank of Kuwait</h2>\n                            <p>Open and account</p>\n                        </ion-item>\n                        <ion-card-content>\n                            Shuwaikh - Zain Company - main branch\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n            <ion-row class="bg-white">\n                <ion-col text-center class="date">\n                    <small>WED</small>\n                    <strong class="text-primary">12</strong>\n                    <small>12:00</small>\n                </ion-col>\n                <ion-col>\n                    <ion-card>\n                        <ion-item>\n                            <ion-avatar item-start>\n                                <img src="assets/imgs/nakta.png">\n                            </ion-avatar>\n                            <h2>National bank of Kuwait</h2>\n                            <p>Open and account</p>\n                        </ion-item>\n                        <ion-card-content>\n                            Shuwaikh - Zain Company - main branch\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class="bg-white">\n                <ion-col text-center class="date">\n                    <small>WED</small>\n                    <strong class="text-primary">12</strong>\n                    <small>12:00</small>\n                </ion-col>\n                <ion-col>\n                    <ion-card>\n                        <ion-item>\n                            <ion-avatar item-start>\n                                <img src="assets/imgs/nakta.png">\n                            </ion-avatar>\n                            <h2>National bank of Kuwait</h2>\n                            <p>Open and account</p>\n                        </ion-item>\n                        <ion-card-content>\n                            Shuwaikh - Zain Company - main branch\n                        </ion-card-content>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatwithdoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatwithdoctorPage = /** @class */ (function () {
    function ChatwithdoctorPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.Treatment = "v1";
    }
    ChatwithdoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatwithdoctor',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\chatwithdoctor\chatwithdoctor.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Ask doctor\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p padding-left padding-right><strong>Describe your issue</strong></p>\n    <ion-list>\n        <ion-item>\n            <ion-label>Treatment Type</ion-label>\n            <ion-select [(ngModel)]="Treatment" interface="popover">\n                <ion-option value="v1">Bones & Join Problem</ion-option>\n                <ion-option value="v2">Blood Presser Problem</ion-option>\n                <ion-option value="v3">Skin Problem</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>Title</ion-label>\n            <ion-input type="text" placeholder="Tap to add title (100 words)"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-textarea type="text" placeholder="Describe your issue (300 words)"></ion-textarea>\n        </ion-item>\n        <ion-item>\n            <ion-label for="file">File attachment (optional)<span class="text-success" float-right>Upload file</span></ion-label>\n            <ion-input type="file" placeholder="Upload file" id="file"></ion-input>\n        </ion-item>\n    </ion-list>\n    <p text-center>Usually our doctor reply in 5-10 minutes</p>\n\n    <button ion-button full class="btn success fixed">Submit Question</button>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\chatwithdoctor\chatwithdoctor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChatwithdoctorPage);
    return ChatwithdoctorPage;
}());

//# sourceMappingURL=chatwithdoctor.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tests_tests__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LabdetailsPage = /** @class */ (function () {
    function LabdetailsPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    LabdetailsPage.prototype.tests = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__tests_tests__["a" /* TestsPage */]);
        modal.present();
    };
    LabdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-labdetails',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\labdetails\labdetails.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Lab Info\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-list>\n        <ion-card>\n            <ion-item>\n                <ion-avatar item-start>\n                    <img src="assets/imgs/lab-1.png">\n                </ion-avatar>\n                <h2>Enzo Clinical Labs-Astoria</h2>\n                <p>251 Erena street, NY 11102, USA</p>\n                <h6 class="text-danger">Timing<span>08:00 to 22:00</span></h6>\n            </ion-item>\n        </ion-card>\n        <ion-searchbar (ionInput)="getItems($event)" (click)="tests()" placeholder="Search for tests"></ion-searchbar>\n        <div class="bg-white overview">\n            <p class="text-danger header">Address<strong float-right class="text-success">Get Direction</strong></p>\n            <p class="header"><strong>251 Erena street, NY 11102, USA</strong></p>\n            <div class="map-location">\n                <ion-icon name="ios-pin" class="text-danger" style="top: 42%; left: 45%"></ion-icon>\n                <img src="assets/imgs/map-location.png" style="position: absolute;height: 100%;bottom: 0;z-index: 0;width: 100%;">\n            </div>\n        </div>\n        <div class="bg-white overview">\n            <p class="text-danger header">Facilities</p>\n            <ion-row>\n                <ion-col col-12>\n                    <div>\n                        <img src="assets/imgs/list-icon.png">\n                        <h3>Parking not available</h3>\n                    </div>\n                </ion-col>\n                <ion-col col-12>\n                    <div>\n                        <img src="assets/imgs/list-icon.png">\n                        <h3>E-Reports available</h3>\n                    </div>\n                </ion-col>\n                <ion-col col-12>\n                    <div>\n                        <img src="assets/imgs/list-icon.png">\n                        <h3>Card accepted</h3>\n                    </div>\n                </ion-col>\n                <ion-col col-12>\n                    <div>\n                        <img src="assets/imgs/list-icon.png">\n                        <h3>Prescriprion Pick up available</h3>\n                    </div>\n                </ion-col>\n                <ion-col col-12>\n                    <div>\n                        <img src="assets/imgs/list-icon.png">\n                        <h3>Report doorstep drop available</h3>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <br>\n        </div>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n    <div padding class="fixed">\n        <ion-row>\n            <ion-col col-6><button ion-button full class="btn text-danger">Message</button></ion-col>\n            <ion-col col-6><button ion-button full class="btn success">CallNow</button></ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\labdetails\labdetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], LabdetailsPage);
    return LabdetailsPage;
}());

//# sourceMappingURL=labdetails.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicaldetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MedicaldetailPage = /** @class */ (function () {
    function MedicaldetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MedicaldetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medicaldetail',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\medicaldetail\medicaldetail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Medical Shop\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-list>\n        <ion-card>\n            <ion-item>\n                <ion-avatar item-start>\n                    <img src="assets/imgs/medical-1.png">\n                </ion-avatar>\n                <h2>Johnson Medical Store</h2>\n                <p>251 Erena street, NY 11102, USA</p>\n                <h6 class="text-danger">Open Now<span>08:00 to 22:00</span></h6>\n            </ion-item>\n        </ion-card>\n        <div class="bg-white overview">\n            <p class="text-danger header">Address<strong float-right class="text-success">Get Direction</strong></p>\n            <p class="header"><strong>251 Erena street, NY 11102, USA</strong></p>\n            <div class="map-location">\n                <ion-icon name="ios-pin" class="text-danger" style="top: 42%; left: 45%"></ion-icon>\n                <img src="assets/imgs/map-location.png" style="position: absolute;height: 100%;bottom: 0;z-index: 0;width: 100%;">\n            </div>\n        </div>\n        <div class="bg-white overview">\n            <p class="text-danger header">Facilities</p>\n            <ion-row>\n                <ion-col col-12>\n                    <div>\n                        <img src="assets/imgs/list-icon.png">\n                        <h3>Parking not available</h3>\n                    </div>\n                </ion-col>\n                <ion-col col-12>\n                    <div>\n                        <img src="assets/imgs/list-icon.png">\n                        <h3>E-Reports available</h3>\n                    </div>\n                </ion-col>\n                <ion-col col-12>\n                    <div>\n                        <img src="assets/imgs/list-icon.png">\n                        <h3>Card accepted</h3>\n                    </div>\n                </ion-col>\n                <ion-col col-12>\n                    <div>\n                        <img src="assets/imgs/list-icon.png">\n                        <h3>Prescriprion Pick up available</h3>\n                    </div>\n                </ion-col>\n                <ion-col col-12>\n                    <div>\n                        <img src="assets/imgs/list-icon.png">\n                        <h3>Report doorstep drop available</h3>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <br>\n        </div>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n    <div padding class="fixed">\n        <ion-row>\n            <ion-col col-6><button ion-button full class="btn text-danger">Message</button></ion-col>\n            <ion-col col-6><button ion-button full class="btn success">CallNow</button></ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\medicaldetail\medicaldetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MedicaldetailPage);
    return MedicaldetailPage;
}());

//# sourceMappingURL=medicaldetail.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentdetailPage = /** @class */ (function () {
    function AppointmentdetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AppointmentdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointmentdetail',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\appointmentdetail\appointmentdetail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Booking Detail\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/nakta.png">\n            </ion-avatar>\n            <h2>National bank of Kuwait</h2>\n            <span class="text-danger">Cancel</span>\n        </ion-item>\n        <ion-card-content>\n            <ion-row class="appot-detail">\n                <ion-col class="icon">\n                    <ion-icon name="md-calendar" class="text-danger"></ion-icon>\n                </ion-col>\n                <ion-col class="detail">\n                    <small>The date and time of the appointment</small>\n                    <strong>12 March,12:00 noon</strong>\n                    <span>in 3 days</span>\n                </ion-col>\n                <ion-col class="option text-success">Change</ion-col>\n            </ion-row>\n            <ion-row class="appot-detail">\n                <ion-col class="icon">\n                    <ion-icon name="ios-pin" class="text-danger"></ion-icon>\n                </ion-col>\n                <ion-col class="detail">\n                    <small>Address</small>\n                    <strong>Shuwaikh,</strong>\n                    <span>Zain Company - main branch</span>\n                </ion-col>\n            </ion-row>\n        \n            <ion-row class="appot-detail">\n                <ion-col class="icon">\n                    <ion-icon name="md-clipboard" class="text-danger"></ion-icon>\n                </ion-col>\n                <ion-col class="detail">\n                    <small>Reserving a name</small>\n                    <strong>Khaled Ahmed Hassan</strong>\n                    <span>66666666</span>\n                </ion-col>\n            </ion-row>\n            <ion-row class="appot-detail">\n                <ion-col class="icon">\n                    <ion-icon name="md-information-circle" class="text-danger"></ion-icon>\n                </ion-col>\n                <ion-col class="detail">\n                    <small>Reservation number</small>\n                    <strong>66554492</strong>\n                    <span>Just forreference purpose</span>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n    <div class="fix-btn"><button ion-button full class="btn success">Get Direction</button></div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\appointmentdetail\appointmentdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AppointmentdetailPage);
    return AppointmentdetailPage;
}());

//# sourceMappingURL=appointmentdetail.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, translate) {
        this.navCtrl = navCtrl;
        this.login = "signin";
        this.param = { value: 'world' };
        this.translate = translate;
        translate.setDefaultLang("en");
    }
    SigninPage.prototype.tabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SigninPage.prototype.forgotpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    SigninPage.prototype.location = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\signin\signin.html"*/'<!--\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Sign In\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n-->\n\n<ion-content class="bg-light">\n    <div class="logo bg-white" text-center>\n        <img src="assets/imgs/logo.png">\n    </div>\n\n    <div class="defult-tab bg-white">\n        <ion-segment [(ngModel)]="login" padding-left padding-right>\n            <ion-segment-button value="signin" class="text-white">\n                Sign in\n            </ion-segment-button>\n            <ion-segment-button value="signup" class="text-white">\n                Sign up\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n\n    <div [ngSwitch]="login" class="difault-form bg-light" padding>\n        <ion-list *ngSwitchCase="\'signin\'">\n            <ion-item class="bg-light">\n                <ion-input type="number" placeholder="Mobile Number"></ion-input>\n            </ion-item>\n            <ion-item class="bg-light">\n                <ion-input type="password" placeholder="Password"></ion-input>\n                <small class="password">Forgot?</small>\n            </ion-item>\n            <small class="password" (click)="forgotpassword()">Forgot password?</small>\n            <br>\n            <button ion-button full class="btn primary" (click)="tabs()">Sign in</button>\n            <ion-row class="btn-grup">\n                <ion-col col-6><button ion-button full class="btn text-primary">Register Now</button></ion-col>\n                <ion-col col-6 text-center>New user?</ion-col>\n            </ion-row>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'signup\'">\n            <ion-item class="bg-light">\n                <ion-input type="number" placeholder="Mobile Number"></ion-input>\n            </ion-item>\n            <ion-item class="bg-light">\n                <ion-input type="text" placeholder="Full Name"></ion-input>\n            </ion-item>\n            <ion-item class="bg-light">\n                <ion-input type="text" placeholder="Password"></ion-input>\n            </ion-item>\n            <br>\n            <button ion-button full class="btn primary" (click)="location()">Sign up</button>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["b" /* TranslateService */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myfeedbacks_myfeedbacks__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blogs_blogs__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aboutus_aboutus__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__terms_terms__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_help__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AccountPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    AccountPage.prototype.myfeedbacks = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__myfeedbacks_myfeedbacks__["a" /* MyfeedbacksPage */]);
    };
    AccountPage.prototype.blogs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__blogs_blogs__["a" /* BlogsPage */]);
    };
    AccountPage.prototype.aboutus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aboutus_aboutus__["a" /* AboutusPage */]);
    };
    AccountPage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__terms_terms__["a" /* TermsPage */]);
    };
    AccountPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__help_help__["a" /* HelpPage */]);
    };
    AccountPage.prototype.setting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\account\account.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Account\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n\n    <ion-card (click)="profile()">\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile1.png">\n            </ion-avatar>\n            <h2>Khaled Ahmed Hassan</h2>\n            <p>Complete the data</p>\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n    </ion-card>\n\n    <div class="">\n        <ion-list>\n            <ion-item>\n                <ion-icon name="md-information-circle" item-start class="text-primary"></ion-icon>\n                <span>\n                    About reservations\n                    <small>Details about the reservations app</small>\n                </span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="md-clipboard" item-start class="text-primary"></ion-icon>\n                <span>Terms & Conditions\n                <small>reservations App Terms and Conditions</small>\n                </span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="md-mail" item-start class="text-primary"></ion-icon>\n                <span>Technical support\n                <small>Send us your inquiries and suggestions</small>\n                </span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="md-share" item-start class="text-primary"></ion-icon>\n                <span>Share reservations app\n                <small>Share the reservations app with your friends and family</small>\n                </span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n        </ion-list>\n    </div>\n\n\n    <ion-list>\n\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\profile\profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Data\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div class="profile-img">\n        <img src="assets/imgs/profile1.png">\n        <ion-icon name="md-camera"></ion-icon>\n    </div>\n    <ion-item-group>\n        <ion-item-divider>\n            <ion-label>Name</ion-label>\n            <ion-input type="text" value="Emili Williams" readonly></ion-input>\n        </ion-item-divider>\n        <ion-item-divider>\n            <ion-label>E-mail </ion-label>\n            <ion-input type="text" value="Emiliwilliams@mail.com" readonly></ion-input>\n        </ion-item-divider>\n        <ion-item-divider>\n            <ion-label>Mobile number</ion-label>\n            <ion-input type="text" value="6666666" readonly></ion-input>\n        </ion-item-divider>\n        <ion-item-divider>\n            <ion-label>Gender</ion-label>\n            <ion-input type="text" value="Female" readonly></ion-input>\n        </ion-item-divider>\n        <ion-item-divider>\n            <ion-label>Date Of Birth</ion-label>\n            <ion-input type="text" value="25 june 1989" readonly></ion-input>\n        </ion-item-divider>\n        \n        <ion-item-divider>\n            <ion-label>Address</ion-label>\n            <ion-input type="text" value="Hawaly" readonly></ion-input>\n        </ion-item-divider>\n        \n        <ion-item-divider>\n            <button class="btn success" full ion-button>Update Profile</button>\n        </ion-item-divider>\n    </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyfeedbacksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyfeedbacksPage = /** @class */ (function () {
    function MyfeedbacksPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyfeedbacksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myfeedbacks',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\myfeedbacks\myfeedbacks.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Feedbacks\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile1.png">\n            </ion-avatar>\n            <h2><span>To</span> Dr. Josephan Williamson</h2>\n            <p><span>Visited For</span> Cardiac Surgeon</p>\n            <div class="rate">\n                <strong>4.5</strong>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star"></ion-icon>\n                <span>20 Dec 2017</span>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile2.png">\n            </ion-avatar>\n            <h2><span>To</span> Dr. Josephan Williamson</h2>\n            <p><span>Visited For</span> Cardiac Surgeon</p>\n            <div class="rate">\n                <strong>4.5</strong>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star"></ion-icon>\n                <span>20 Dec 2017</span>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile3.png">\n            </ion-avatar>\n            <h2><span>To</span> Dr. Josephan Williamson</h2>\n            <p><span>Visited For</span> Cardiac Surgeon</p>\n            <div class="rate">\n                <strong>4.5</strong>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star"></ion-icon>\n                <span>20 Dec 2017</span>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile4.png">\n            </ion-avatar>\n            <h2><span>To</span> Dr. Josephan Williamson</h2>\n            <p><span>Visited For</span> Cardiac Surgeon</p>\n            <div class="rate">\n                <strong>4.5</strong>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star"></ion-icon>\n                <span>20 Dec 2017</span>\n            </div>\n        </ion-item>\n        <ion-card-content>\n            Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\myfeedbacks\myfeedbacks.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyfeedbacksPage);
    return MyfeedbacksPage;
}());

//# sourceMappingURL=myfeedbacks.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__readblog_readblog__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogsPage = /** @class */ (function () {
    function BlogsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BlogsPage.prototype.readblog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__readblog_readblog__["a" /* ReadblogPage */]);
    };
    BlogsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blogs',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\blogs\blogs.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Health Blogs\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card (click)="readblog()">\n        <ion-card-content>\n            <img src="assets/imgs/blog-1.png">\n            <div class="blog-text">\n                <p><span class="text-danger">Dental</span>12 Dec, 18</p>\n                <h2>Get Rid of Breath & Yellow Teeth</h2>\n                <p>Dr.Sam Smith, Dentist\n                    <ion-icon name="md-share" class="text-success"></ion-icon>\n                </p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card (click)="readblog()">\n        <ion-card-content>\n            <img src="assets/imgs/blog-2.png">\n            <div class="blog-text">\n                <p><span class="text-danger">Hair Care</span>12 Dec, 18</p>\n                <h2>Get Rid of Breath & Yellow Teeth</h2>\n                <p>Dr.Sam Smith, Dentist\n                    <ion-icon name="md-share" class="text-success"></ion-icon>\n                </p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card (click)="readblog()">\n        <ion-card-content>\n            <img src="assets/imgs/blog-3.png">\n            <div class="blog-text">\n                <p><span class="text-danger">Food & Health</span>12 Dec, 18</p>\n                <h2>Get Rid of Breath & Yellow Teeth</h2>\n                <p>Dr.Sam Smith, Dentist\n                    <ion-icon name="md-share" class="text-success"></ion-icon>\n                </p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <ion-card (click)="readblog()">\n        <ion-card-content>\n            <img src="assets/imgs/blog-4.png">\n            <div class="blog-text">\n                <p><span class="text-danger">Skin Care</span>12 Dec, 18</p>\n                <h2>Get Rid of Breath & Yellow Teeth</h2>\n                <p>Dr.Sam Smith, Dentist\n                    <ion-icon name="md-share" class="text-success"></ion-icon>\n                </p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\blogs\blogs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], BlogsPage);
    return BlogsPage;
}());

//# sourceMappingURL=blogs.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadblogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReadblogPage = /** @class */ (function () {
    function ReadblogPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReadblogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-readblog',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\readblog\readblog.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-icon name="md-share" float-right class="text-white"></ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img src="assets/imgs/blog-header.png">\n    <ion-card>\n        <ion-card-content>\n            <div class="blog-text">\n                <p><span class="text-danger">Dental</span>12 Dec, 18</p>\n                <h2>Get Rid of Breath & Yellow Teeth</h2>\n                <p>Dr.Sam Smith, Dentist</p>\n                <br>\n                <h6>In order for virtual scroll to efficiently size and locate every item, it\'s very important every element within each virtual item</h6>\n                <h5>10 Powerfull Winter Foods</h5>\n                <strong>Green Garlic</strong>\n                <h6>When including images within Virtual Scroll, be sure to use. In order for virtual scroll to efficiently size and locate every item, it\'s very important every element within each virtual item</h6>\n                <strong>Hara Chana/Fesh Green Garbanzos</strong>\n                <h6>In order for virtual scroll to efficiently size and locate every item, it\'s very important every element within each virtual item does not dynamically change its dimensions or location. The best way to ensure size and location does not change, it\'s recommended each virtual item has locked in its size via CSS.</h6>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\readblog\readblog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ReadblogPage);
    return ReadblogPage;
}());

//# sourceMappingURL=readblog.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutusPage = /** @class */ (function () {
    function AboutusPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\aboutus\aboutus.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            About Us\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img src="assets/imgs/about.png">\n    <div class="text-page">\n        <h1 class="text-danger heading">About Reservation</h1>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\aboutus\aboutus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tnc = "tc";
    }
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\terms\terms.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Terms & Condition\n        </ion-title>\n    </ion-navbar>\n    <div class="defult-tab">\n        <ion-segment [(ngModel)]="tnc" padding-left padding-right>\n            <ion-segment-button value="tc" class="text-white">\n                Terms\n            </ion-segment-button>\n            <ion-segment-button value="pp" class="text-white pp">\n                Privacy Policy\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div [ngSwitch]="tnc" class="difault-form bg-light" padding>\n        <ion-list *ngSwitchCase="\'tc\'">\n            <div class="text-page">\n\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n                <h1 class="text-danger heading">Terms With DoctoHub</h1>\n                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>\n            </div>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'pp\'">\n            <div class="text-page">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n                <h1 class="text-danger heading">Privacy Policy With DoctoHub</h1>\n                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>\n            </div>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\terms\terms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\help\help.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Help & Support\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img src="assets/imgs/about.png">\n    <div class="difault-form bg-white" padding>\n        <strong class="text-danger">Let us know your issue</strong>\n        <ion-list>\n            <ion-item>\n                <ion-input type="text" placeholder="Phone Number"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Issue regarding"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-textarea type="text" placeholder="Describe your issue" style="height: 100px;"></ion-textarea>\n            </ion-item>\n            <br>\n            <button ion-button full class="btn success">Send Message</button>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DestinationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__labdetails_labdetails__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tests_tests__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DestinationPage = /** @class */ (function () {
    function DestinationPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.location = "n1";
    }
    DestinationPage.prototype.labdetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__labdetails_labdetails__["a" /* LabdetailsPage */]);
    };
    DestinationPage.prototype.tests = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__tests_tests__["a" /* TestsPage */]);
        modal.present();
    };
    DestinationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-destination',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\destination\destination.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Choose your destination\n            <span><small margin-right>Location</small>\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n                <ion-option value="n1">Wallington</ion-option>\n                <ion-option value="n2">Nerobi</ion-option>\n                <ion-option value="n3">Central Park</ion-option>\n              </ion-select>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-searchbar (ionInput)="getItems($event)" (click)="tests()" placeholder="Banks, hospitals, communications, government agencies"></ion-searchbar>\n\n    <ion-card>\n        <ion-item style="background-image:url(assets/imgs/service1.png);background-size: 100% auto;">\n            <h3>Banks<button ion-button class="btn primary">Choose</button></h3>\n            <p>Choose from the list of banks</p>\n            <p>National Bank of kuwait, Boubyan Bank, Gulf Bank, AI Ahli United, Bank of Kuwait</p>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item style="background-image:url(assets/imgs/service2.png);background-size: 100% auto;">\n            <h3>Hospitals<button ion-button class="btn primary">Choose</button></h3>\n            <p>Choose from the list of hospitals</p>\n            <p>AI-Amiri Hospital, AI-Sabah Hospital, Zain Hospital, AI-Seef Hospital</p>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item style="background-image:url(assets/imgs/service3.png);background-size: 100% auto;">\n            <h3>Entertainment<button ion-button class="btn primary">Choose</button></h3>\n            <p>Choose from the list of carriers</p>\n            <p>Zain, Ooredoo, STC</p>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item style="background-image:url(assets/imgs/service4.png);background-size: 100% auto;">\n            <h3>Shopping<button ion-button class="btn primary">Choose</button></h3>\n            <p>Choose from a list of international brands</p>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item style="background-image:url(assets/imgs/service5.png);background-size: 100% auto;">\n            <h3>Communications<button ion-button class="btn primary">Choose</button></h3>\n        </ion-item>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\destination\destination.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], DestinationPage);
    return DestinationPage;
}());

//# sourceMappingURL=destination.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__labdetails_labdetails__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tests_tests__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LabPage = /** @class */ (function () {
    function LabPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.location = "n1";
    }
    LabPage.prototype.labdetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__labdetails_labdetails__["a" /* LabdetailsPage */]);
    };
    LabPage.prototype.tests = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__tests_tests__["a" /* TestsPage */]);
        modal.present();
    };
    LabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lab',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\lab\lab.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Lab & Test\n            <span><small margin-right>Location</small>\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n                <ion-option value="n1">Wallington</ion-option>\n                <ion-option value="n2">Nerobi</ion-option>\n                <ion-option value="n3">Central Park</ion-option>\n              </ion-select>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-searchbar (ionInput)="getItems($event)" (click)="tests()" placeholder="Search for tests"></ion-searchbar>\n\n    <ion-card>\n        <ion-item (click)="labdetails()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/lab-1.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <h6 class="text-success">250+ Test Available<button ion-button class="btn success">Call Now</button></h6>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item (click)="labdetails()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/lab-2.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <h6 class="text-success">250+ Test Available<button ion-button class="btn success">Call Now</button></h6>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item (click)="labdetails()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/lab-3.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <h6 class="text-success">250+ Test Available<button ion-button class="btn success">Call Now</button></h6>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item (click)="labdetails()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/lab-4.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <h6 class="text-success">250+ Test Available<button ion-button class="btn success">Call Now</button></h6>\n        </ion-item>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\lab\lab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], LabPage);
    return LabPage;
}());

//# sourceMappingURL=lab.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicalmap_medicalmap__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medicaldetail_medicaldetail__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicalPage = /** @class */ (function () {
    function MedicalPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.location = "n1";
    }
    MedicalPage.prototype.medicalmap = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__medicalmap_medicalmap__["a" /* MedicalmapPage */]);
        modal.present();
    };
    MedicalPage.prototype.medicaldetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__medicaldetail_medicaldetail__["a" /* MedicaldetailPage */]);
    };
    MedicalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medical',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\medical\medical.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Medical Shops\n            <span><small margin-right>Location</small>\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n                <ion-option value="n1">Wallington</ion-option>\n                <ion-option value="n2">Nerobi</ion-option>\n                <ion-option value="n3">Central Park</ion-option>\n              </ion-select>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="text-danger bg-white heading" padding (click)="medicalmap()">View in map\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n    </p>\n    <ion-card>\n        <ion-item (click)="medicaldetail()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/medical-1.png">\n            </ion-avatar>\n            <h2>Johnson Medical Store</h2>\n            <p>251 Erena street, NY 11102, USA</p>\n            <h6 class="text-success">Open 07:00 to 22:00<button ion-button class="btn success">Call Now</button></h6>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item (click)="medicaldetail()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/medical-2.png">\n            </ion-avatar>\n            <h2>Johnson Medical Store</h2>\n            <p>251 Erena street, NY 11102, USA</p>\n            <h6 class="text-success">Open 07:00 to 22:00<button ion-button class="btn success">Call Now</button></h6>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item (click)="medicaldetail()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/medical-3.png">\n            </ion-avatar>\n            <h2>Johnson Medical Store</h2>\n            <p>251 Erena street, NY 11102, USA</p>\n            <h6 class="text-success">Open 07:00 to 22:00<button ion-button class="btn success">Call Now</button></h6>\n        </ion-item>\n    </ion-card>\n    <ion-card>\n        <ion-item (click)="medicaldetail()">\n            <ion-avatar item-start>\n                <img src="assets/imgs/medical-4.png">\n            </ion-avatar>\n            <h2>Johnson Medical Store</h2>\n            <p>251 Erena street, NY 11102, USA</p>\n            <h6 class="text-success">Open 07:00 to 22:00<button ion-button class="btn success">Call Now</button></h6>\n        </ion-item>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\medical\medical.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], MedicalPage);
    return MedicalPage;
}());

//# sourceMappingURL=medical.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicaldetail_medicaldetail__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MedicalmapPage = /** @class */ (function () {
    function MedicalmapPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.location = "b1";
    }
    MedicalmapPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MedicalmapPage.prototype.medicaldetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__medicaldetail_medicaldetail__["a" /* MedicaldetailPage */]);
    };
    MedicalmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medicalmap',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\medicalmap\medicalmap.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-icon name="md-close" (click)="dismiss()"></ion-icon>&nbsp;&nbsp;&nbsp;Map View\n            <span class="location"><small>Location</small>\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n                <ion-option value="b1">Wallington</ion-option>\n                <ion-option value="b2">Nerobi</ion-option>\n                <ion-option value="b3">Central Park</ion-option>\n              </ion-select>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img src="assets/imgs/map.png" style="position: absolute;height: 100%;bottom: 0;z-index: -99;">\n\n    <div class="location-point">\n        <ion-icon name="pin" class="text-danger" style="top: 20%; left: 20%"></ion-icon>\n        <ion-icon name="pin" class="text-danger" style="top: 40%; left: 70%"></ion-icon>\n        <ion-icon name="pin" class="text-danger" style="top: 60%; left: 10%"></ion-icon>\n        <ion-icon name="pin" class="text-danger" style="top: 45%; left: 85%"></ion-icon>\n        <ion-icon name="pin" class="text-success" style="top: 50%; left: 20%"></ion-icon>\n    </div>\n\n\n\n    <div class="card-container">\n        <ion-scroll scrollX="true" style="height:110px;white-space: nowrap;">\n            <ion-card>\n                <ion-item (click)="medicaldetail()" (click)="dismiss()">\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/medical-1.png">\n                    </ion-avatar>\n                    <h2>Johnson Medical Store</h2>\n                    <p>251 Erena street, NY 11102, USA</p>\n                    <h6 class="text-success">Open 07:00 to 22:00 </h6>\n                </ion-item>\n            </ion-card>\n            <ion-card>\n                <ion-item (click)="medicaldetail()" (click)="dismiss()">\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/medical-1.png">\n                    </ion-avatar>\n                    <h2>Johnson Medical Store</h2>\n                    <p>251 Erena street, NY 11102, USA</p>\n                    <h6 class="text-success">Open 07:00 to 22:00 </h6>\n                </ion-item>\n            </ion-card>\n            <ion-card>\n                <ion-item (click)="medicaldetail()" (click)="dismiss()">\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/medical-1.png">\n                    </ion-avatar>\n                    <h2>Johnson Medical Store</h2>\n                    <p>251 Erena street, NY 11102, USA</p>\n                    <h6 class="text-success">Open 07:00 to 22:00 </h6>\n                </ion-item>\n            </ion-card>\n        </ion-scroll>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\medicalmap\medicalmap.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], MedicalmapPage);
    return MedicalmapPage;
}());

//# sourceMappingURL=medicalmap.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointmentdetail_appointmentdetail__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentPage = /** @class */ (function () {
    function AppointmentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AppointmentPage.prototype.appointmentdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appointmentdetail_appointmentdetail__["a" /* AppointmentdetailPage */]);
    };
    AppointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointment',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\appointment\appointment.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Appointments\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <p class="heading">Upcoming Appointments</p>\n    <ion-list class="doctor-list">\n        <ion-row class="bg-white" (click)="appointmentdetail()">\n            <ion-col text-center class="date">\n                <small>WED</small>\n                <strong class="text-primary">12</strong>\n                <small>12:00</small>\n            </ion-col>\n            <ion-col>\n                <ion-card>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src="assets/imgs/nakta.png">\n                        </ion-avatar>\n                        <h2>National bank of Kuwait</h2>\n                        <p>Open an account</p>\n                        <ion-icon name="md-more"></ion-icon>\n                    </ion-item>\n                    <ion-card-content>\n                        Shukaikh - Zain Company - main branch\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n        <ion-row class="bg-white" (click)="appointmentdetail()">\n            <ion-col text-center class="date">\n                <small>WED</small>\n                <strong class="text-primary">12</strong>\n                <small>12:00</small>\n            </ion-col>\n            <ion-col>\n                <ion-card>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src="assets/imgs/nakta.png">\n                        </ion-avatar>\n                        <h2>National bank of Kuwait</h2>\n                        <p>Open an account</p>\n                        <ion-icon name="md-more"></ion-icon>\n                    </ion-item>\n                    <ion-card-content>\n                        Shukaikh - Zain Company - main branch\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n    <p class="heading">Past Appointments</p>\n    <ion-list class="doctor-list">\n        <ion-row class="bg-white" (click)="appointmentdetail()">\n            <ion-col text-center class="date">\n                <small>WED</small>\n                <strong class="text-primary">12</strong>\n                <small>12:00</small>\n            </ion-col>\n            <ion-col>\n                <ion-card>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src="assets/imgs/nakta.png">\n                        </ion-avatar>\n                        <h2>National bank of Kuwait</h2>\n                        <p>Open an account</p>\n                        <ion-icon name="md-more"></ion-icon>\n                    </ion-item>\n                    <ion-card-content>\n                        Shukaikh - Zain Company - main branch\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n        <ion-row class="bg-white" (click)="appointmentdetail()">\n            <ion-col text-center class="date">\n                <small>WED</small>\n                <strong class="text-primary">12</strong>\n                <small>12:00</small>\n            </ion-col>\n            <ion-col>\n                <ion-card>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src="assets/imgs/nakta.png">\n                        </ion-avatar>\n                        <h2>National bank of Kuwait</h2>\n                        <p>Open an account</p>\n                        <ion-icon name="md-more"></ion-icon>\n                    </ion-item>\n                    <ion-card-content>\n                        Shukaikh - Zain Company - main branch\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\appointment\appointment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AppointmentPage);
    return AppointmentPage;
}());

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\forgotpassword\forgotpassword.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Forgot your password?\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div class="bg-white" padding text-center>\n        <br>\n        <p style="margin-bottom: 2rem"><strong class="text-danger">Don\'t worry, it will take less than a minute.</strong></p>\n        <p>Enter your phone number and we will send a short message <br>on how to reset the password</p>\n        <br>\n    </div>\n    <div class="difault-form bg-light" padding>\n        <ion-list>\n            <ion-item class="bg-light">\n                <ion-input type="number" placeholder="Enter phone number"></ion-input>\n            </ion-item>\n            <br>\n            <button ion-button full class="btn primary">Send</button>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\forgotpassword\forgotpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatscreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatscreenPage = /** @class */ (function () {
    function ChatscreenPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatscreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatscreen',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\chatscreen\chatscreen.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Dr.Joseph Williamson\n            <ion-icon name="ios-information-circle-outline" float-right></ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="chat-bg" style="background: url(assets/imgs/chat-bg.png);" padding>\n    <p class="send">Hello Doctor,<br>Tell me if it is good time to talk?<small>12:29</small></p>\n    <p class="receve"><img src="assets/imgs/profile1.png">Hello, How may I help you.?<br>Tell me about your problem.<small>12:29</small></p>\n    <p class="send">Thanks you.!<br>Actually from last 2-3days<br>I am feeling too sickness<small>12:29</small></p>\n    <div class="chat-input">\n        <ion-item>\n            <ion-input type="text" placeholder="Write your message"></ion-input>\n        </ion-item>\n        <ion-icon name="attach" class="attachment"></ion-icon>\n        <ion-icon name="send" class="text-success"></ion-icon>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\chatscreen\chatscreen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChatscreenPage);
    return ChatscreenPage;
}());

//# sourceMappingURL=chatscreen.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecilitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doctroslist_doctroslist__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpecilitiesPage = /** @class */ (function () {
    function SpecilitiesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.location = "n1";
    }
    SpecilitiesPage.prototype.doctroslist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__doctroslist_doctroslist__["a" /* DoctroslistPage */]);
    };
    SpecilitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-specilities',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\specilities\specilities.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Find Doctor\n            <span><small margin-right>Location</small>\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n                <ion-option value="n1">Wallington</ion-option>\n                <ion-option value="n2">Nerobi</ion-option>\n                <ion-option value="n3">Central Park</ion-option>\n              </ion-select>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Doctor, specialities, clinic"></ion-searchbar>\n    <div class="bg-white">\n        <p class="text-danger">Top Specialities</p>\n        <ion-list>\n            <ion-item (click)="doctroslist()">\n                Cardiologist\n                <span float-right>234</span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                Orthalmologist\n                <span float-right>234</span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                Dermatologist\n                <span float-right>234</span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                Gynecologist\n                <span float-right>234</span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                Neonatologist\n                <span float-right>234</span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n        </ion-list>\n    </div>\n    <div class="bg-white">\n        <p class="text-danger">List of Specialities</p>\n        <ion-list>\n            <ion-item>\n                Addiction Psychiatrist\n                <span float-right>234</span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                Adolescent medicine Specialities\n                <span float-right>234</span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                Allegrist (immunologist)\n                <span float-right>234</span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                Addiction Psychiatrist\n                <span float-right>234</span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                Adolescent medicine Specialities\n                <span float-right>234</span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                Allegrist (immunologist)\n                <span float-right>234</span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\specilities\specilities.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SpecilitiesPage);
    return SpecilitiesPage;
}());

//# sourceMappingURL=specilities.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctroslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doctorprofile_doctorprofile__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoctroslistPage = /** @class */ (function () {
    function DoctroslistPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.location = "b1";
        this.category = "a1";
    }
    DoctroslistPage.prototype.map = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */]);
        modal.present();
    };
    DoctroslistPage.prototype.filter = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__filter_filter__["a" /* FilterPage */]);
        modal.present();
    };
    DoctroslistPage.prototype.doctorprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__doctorprofile_doctorprofile__["a" /* DoctorprofilePage */]);
    };
    DoctroslistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctroslist',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\doctroslist\doctroslist.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-select [(ngModel)]="category" interface="popover" style="padding-left: 0;">\n                <ion-option value="a1">Cardiologist</ion-option>\n                <ion-option value="a2">Orthalmologist</ion-option>\n                <ion-option value="a3">Dermatologist</ion-option>\n            </ion-select>\n            <span class="location"><small margin-right>Location</small>\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n                <ion-option value="b1">Wallington</ion-option>\n                <ion-option value="b2">Nerobi</ion-option>\n                <ion-option value="b3">Central Park</ion-option>\n              </ion-select>\n            </span>\n        </ion-title>\n    </ion-navbar>\n    <div class="filter" padding>\n        <ion-row>\n            <ion-col col-4 class="text-danger" text-left (click)="filter()">\n                <ion-icon name="md-funnel"></ion-icon>Filter</ion-col>\n            <ion-col col-4 text-center>234 result found</ion-col>\n            <ion-col col-4 class="text-danger" text-right (click)="map()">View in map</ion-col>\n        </ion-row>\n    </div>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile1.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <button ion-button clear class="btn success" (click)="doctorprofile()">Book</button>\n        </ion-item>\n        <ion-card-content>\n            At apple hospital, Walter street, Wallington\n            <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n                <img src="assets/imgs/img-1.png">\n                <img src="assets/imgs/img-2.png">\n                <img src="assets/imgs/img-3.png">\n                <img src="assets/imgs/img-4.png">\n                <img src="assets/imgs/img-5.png">\n            </ion-scroll>\n        </ion-card-content>\n\n        <ion-row class="about-row">\n            <ion-col col-5 center text-left>\n                Experience <strong>22 Years</strong>\n            </ion-col>\n            <ion-col center text-center>\n                Fee <strong>$30</strong>\n            </ion-col>\n            <ion-col col-5 center text-right>\n                Feedback\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star"></ion-icon>\n                <span>&nbsp;&nbsp;(123)</span>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile2.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <button ion-button clear class="btn success" (click)="doctorprofile()">Book</button>\n        </ion-item>\n        <ion-card-content>\n            At apple hospital, Walter street, Wallington,New york\n            <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n                <img src="assets/imgs/img-1.png">\n                <img src="assets/imgs/img-2.png">\n                <img src="assets/imgs/img-3.png">\n                <img src="assets/imgs/img-4.png">\n                <img src="assets/imgs/img-5.png">\n            </ion-scroll>\n        </ion-card-content>\n        <ion-row class="about-row">\n            <ion-col col-5 center text-left>\n                Experience <strong>22 Years</strong>\n            </ion-col>\n            <ion-col center text-center>\n                Fee <strong>$30</strong>\n            </ion-col>\n            <ion-col col-5 center text-right>\n                Feedback\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star"></ion-icon>\n                <span>&nbsp;&nbsp;(123)</span>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile3.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <button ion-button clear class="btn success" (click)="doctorprofile()">Book</button>\n        </ion-item>\n        <ion-card-content>\n            At apple hospital, Walter street, Wallington,New york\n            <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n                <img src="assets/imgs/img-1.png">\n                <img src="assets/imgs/img-2.png">\n                <img src="assets/imgs/img-3.png">\n                <img src="assets/imgs/img-4.png">\n                <img src="assets/imgs/img-5.png">\n            </ion-scroll>\n        </ion-card-content>\n        <ion-row class="about-row">\n            <ion-col col-5 center text-left>\n                Experience <strong>22 Years</strong>\n            </ion-col>\n            <ion-col center text-center>\n                Fee <strong>$30</strong>\n            </ion-col>\n            <ion-col col-5 center text-right>\n                Feedback\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star"></ion-icon>\n                <span>&nbsp;&nbsp;(123)</span>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile4.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <button ion-button clear class="btn success">Book</button>\n        </ion-item>\n        <ion-card-content>\n            At apple hospital, Walter street, Wallington,New york\n            <ion-scroll scrollX="true" style="height:60px;white-space: nowrap;">\n                <img src="assets/imgs/img-1.png">\n                <img src="assets/imgs/img-2.png">\n                <img src="assets/imgs/img-3.png">\n                <img src="assets/imgs/img-4.png">\n                <img src="assets/imgs/img-5.png">\n            </ion-scroll>\n        </ion-card-content>\n        <ion-row class="about-row">\n            <ion-col col-5 center text-left>\n                Experience <strong>22 Years</strong>\n            </ion-col>\n            <ion-col center text-center>\n                Fee <strong>$30</strong>\n            </ion-col>\n            <ion-col col-5 center text-right>\n                Feedback\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star"></ion-icon>\n                <span>&nbsp;&nbsp;(123)</span>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\doctroslist\doctroslist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], DoctroslistPage);
    return DoctroslistPage;
}());

//# sourceMappingURL=doctroslist.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.location = "b1";
    }
    MapPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\map\map.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-icon name="md-close" (click)="dismiss()"></ion-icon>&nbsp;&nbsp;&nbsp;Map View\n            <span class="location"><small>Location</small>\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n                <ion-option value="b1">Wallington</ion-option>\n                <ion-option value="b2">Nerobi</ion-option>\n                <ion-option value="b3">Central Park</ion-option>\n              </ion-select>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img src="assets/imgs/map.png" style="position: absolute;height: 100%;bottom: 0;z-index: -99;">\n\n    <div class="profile">\n        <div class="profile-img" style="top: 20%; left: 20%"><img src="assets/imgs/profile1.png"></div>\n        <div class="profile-img" style="top: 30%; left: 70%"><img src="assets/imgs/profile2.png"></div>\n        <div class="profile-img active" style="top: 42%; left: 45%"><img src="assets/imgs/profile3.png"></div>\n        <div class="profile-img" style="top: 40%; left: 80%"><img src="assets/imgs/profile4.png"></div>\n        <div class="profile-img" style="top: 70%; left: 30%"><img src="assets/imgs/profile5.png"></div>\n    </div>\n\n\n\n    <div class="card-container">\n        <ion-scroll scrollX="true" style="height:125px;white-space: nowrap;">\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/profile5.png">\n                    </ion-avatar>\n                    <h2>Dr. Josephan Williamson</h2>\n                    <p>Cardiac Surgeon</p>\n                    <ion-icon name="ios-information-circle-outline"></ion-icon>\n                </ion-item>\n                <ion-card-content>\n                    At apple hospital, Walter street, Wallington,New york\n                </ion-card-content>\n                <ion-row class="about-row">\n                    <ion-col col-5 center text-left>\n                        Exp. <strong>22 Years</strong>\n                    </ion-col>\n                    <ion-col center text-center>\n                        Fee <strong>$30</strong>\n                    </ion-col>\n                    <ion-col col-5 center text-right>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star"></ion-icon>\n                        <span>&nbsp;&nbsp;(123)</span>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/profile5.png">\n                    </ion-avatar>\n                    <h2>Dr. Josephan Williamson</h2>\n                    <p>Cardiac Surgeon</p>\n                    <ion-icon name="ios-information-circle-outline"></ion-icon>\n                </ion-item>\n                <ion-card-content>\n                    At apple hospital, Walter street, Wallington,New york\n                </ion-card-content>\n                <ion-row class="about-row">\n                    <ion-col col-5 center text-left>\n                        Exp. <strong>22 Years</strong>\n                    </ion-col>\n                    <ion-col center text-center>\n                        Fee <strong>$30</strong>\n                    </ion-col>\n                    <ion-col col-5 center text-right>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star"></ion-icon>\n                        <span>&nbsp;&nbsp;(123)</span>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/profile5.png">\n                    </ion-avatar>\n                    <h2>Dr. Josephan Williamson</h2>\n                    <p>Cardiac Surgeon</p>\n                    <ion-icon name="ios-information-circle-outline"></ion-icon>\n                </ion-item>\n                <ion-card-content>\n                    At apple hospital, Walter street, Wallington,New york\n                </ion-card-content>\n                <ion-row class="about-row">\n                    <ion-col col-5 center text-left>\n                        Exp. <strong>22 Years</strong>\n                    </ion-col>\n                    <ion-col center text-center>\n                        Fee <strong>$30</strong>\n                    </ion-col>\n                    <ion-col col-5 center text-right>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star"></ion-icon>\n                        <span>&nbsp;&nbsp;(123)</span>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n        </ion-scroll>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    FilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\filter\filter.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-icon name="md-close" (click)="dismiss()"></ion-icon>&nbsp;&nbsp;&nbsp;Filter\n            <span class="location" (click)="dismiss()">Reset</span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light" padding-top>\n    <ion-list radio-group>\n        <ion-list-header>\n            <span class="text-danger">Sort by</span>\n        </ion-list-header>\n\n        <ion-item>\n            <ion-label>Consultancy fees</ion-label>\n            <ion-radio checked="true" value="fee"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Rating</ion-label>\n            <ion-radio value="rate"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Nearer place</ion-label>\n            <ion-radio value="near"></ion-radio>\n        </ion-item>\n    </ion-list>\n    <div></div>\n    <ion-list radio-group>\n        <ion-list-header>\n            <span class="text-danger">Consultancy fees</span>\n        </ion-list-header>\n\n        <ion-item>\n            <ion-label>0$ - 10 $</ion-label>\n            <ion-radio checked="true" value="0-10"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>11$ - 30 $</ion-label>\n            <ion-radio value="11-30"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>31$ - more</ion-label>\n            <ion-radio value="31-more"></ion-radio>\n        </ion-item>\n    </ion-list>\n    <div></div>\n    <ion-list class="check-items" radio-group>\n        <ion-list-header>\n            <span class="text-danger">Gender</span>\n        </ion-list-header>\n        <ion-row class="bg-white">\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label>Male</ion-label>\n                    <ion-radio checked="true" value="male"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label>Female</ion-label>\n                    <ion-radio value="female"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n    <p style="position: relative;height: 60px"></p>\n    <div class="fix-btn"><button ion-button full class="btn success" (click)="dismiss()">Apply Now</button></div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\filter\filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointmentbook_appointmentbook__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addfeedback_addfeedback__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoctorprofilePage = /** @class */ (function () {
    function DoctorprofilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.doctor = "about";
        this.Short = "n1";
    }
    DoctorprofilePage.prototype.addfeedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addfeedback_addfeedback__["a" /* AddfeedbackPage */]);
    };
    DoctorprofilePage.prototype.appointmentbook = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appointmentbook_appointmentbook__["a" /* AppointmentbookPage */]);
    };
    DoctorprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doctorprofile',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\doctorprofile\doctorprofile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            &nbsp;\n            <span>\n                <ion-icon name="ios-bookmark-outline" item-start></ion-icon>\n                <ion-icon name="md-share" item-start></ion-icon>\n                <ion-icon name="md-more" item-start></ion-icon>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <img src="assets/imgs/img-1-burl.png" style="width: 100%;display: block;">\n    <div class="doctor-detail">\n        <img src="assets/imgs/profile4.png">\n        <div>\n            <h2 class="text-white">Dr.Joseph Williamson</h2>\n            <p class="text-white">Cardiac Surgen</p>\n            <h3>MBBS, MCH - Cardio Therecic & Vascular Surgery, FRCS Surgery</h3>\n        </div>\n    </div>\n    <div class="defult-tab bg-white">\n        <ion-segment [(ngModel)]="doctor" padding-left padding-right>\n            <ion-segment-button value="about" class="text-white">\n                About\n            </ion-segment-button>\n            <ion-segment-button value="feedback" class="text-white">\n                Feedback\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n\n    <div [ngSwitch]="doctor" class="bg-light mb">\n        <ion-list *ngSwitchCase="\'about\'">\n            <div class="bg-white overview">\n                <p class="text-danger header">Overview</p>\n                <ion-row>\n                    <ion-col col-6>\n                        <div>\n                            <ion-icon name="md-medkit"></ion-icon>\n                            <p>Experience</p>\n                            <h2>18 Years</h2>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <div>\n                            <ion-icon name="md-thumbs-up"></ion-icon>\n                            <p>Feedback</p>\n                            <h2>4.9\n                                <ion-icon name="md-star" class="active"></ion-icon>\n                                <ion-icon name="md-star" class="active"></ion-icon>\n                                <ion-icon name="md-star" class="active"></ion-icon>\n                                <ion-icon name="md-star" class="active"></ion-icon>\n                                <ion-icon name="md-star"></ion-icon>\n                                <span>(124)</span>\n                            </h2>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <div>\n                            <ion-icon name="logo-usd"></ion-icon>\n                            <p>Consultancy fees</p>\n                            <h2>$28</h2>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <div>\n                            <ion-icon name="md-time"></ion-icon>\n                            <p>Availability</p>\n                            <h2>Available at 012:00 to 13:00</h2>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <div class="bg-white overview">\n                <p class="text-danger header">Address</p>\n                <p class="header"><strong>Apple Hospital, Water street, Wallington, New York. </strong></p>\n                <div class="map-location">\n                    <img src="assets/imgs/map-location.png" style="position: absolute;height: 100%;bottom: 0;z-index: 0;">\n                    <div class="profile-img active" style="top: 42%; left: 45%"><img src="assets/imgs/profile3.png"></div>\n                </div>\n            </div>\n            <div class="bg-white overview">\n                <p class="text-danger header">Services</p>\n                <ion-row>\n                    <ion-col col-6>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Hypertension Treatment</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Health Checkup (General)</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>COPD Treatment</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Fever Treatment</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Diabetes Managment</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Non Intereventional Cardiology</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>ECG</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Diabetology</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Obesity Treatment</h3>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <br>\n            </div>\n            <div class="bg-white overview">\n                <p class="text-danger header">Specialization</p>\n                <ion-row>\n                    <ion-col col-12>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Gernal Physican</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-12>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Family Physican</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-12>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Cardiologist</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-12>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Consultant Physican</h3>\n                        </div>\n                    </ion-col>\n                    <ion-col col-12>\n                        <div>\n                            <img src="assets/imgs/list-icon.png">\n                            <h3>Diabetologist</h3>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <br>\n            </div>\n            <div class="bg-white overview practics">\n                <p class="text-danger header">Also Practics at</p>\n                <ion-row>\n                    <ion-col col-12>\n                        <h5>Health Roots Clinics</h5>\n                        <p>1124, Edison Street, Willington, Newyork </p>\n                    </ion-col>\n                    <ion-col col-12>\n                        <h5>Appolo Hospital</h5>\n                        <p>JJ towers, Johnson street, Hemilton, New york.</p>\n                    </ion-col>\n                </ion-row>\n                <br>\n            </div>\n            <div class="bg-white overview practics">\n                <p class="text-danger header">Available Timings</p>\n                <ion-row>\n                    <ion-col col-6>\n                        <h5>Mon<span float-right>12:00 to 13:00</span></h5>\n                    </ion-col>\n                    <ion-col col-6>\n                        <h5>Tue<span float-right>12:00 to 13:00</span></h5>\n                    </ion-col>\n                    <ion-col col-6>\n                        <h5>Wed<span float-right>12:00 to 13:00</span></h5>\n                    </ion-col>\n                    <ion-col col-6>\n                        <h5>Thu<span float-right>12:00 to 13:00</span></h5>\n                    </ion-col>\n                    <ion-col col-6>\n                        <h5>Fri<span float-right>Closed</span></h5>\n                    </ion-col>\n                    <ion-col col-6>\n                        <h5>Sat<span float-right>12:00 to 13:00</span></h5>\n                    </ion-col>\n                    <ion-col col-6>\n                        <h5>Sun<span float-right>Closed</span></h5>\n                    </ion-col>\n                </ion-row>\n            </div>\n            <br><br>\n            <button ion-button full class="btn success fixed" (click)="appointmentbook()"><ion-icon name="md-calendar"></ion-icon>Book Appointment now</button>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'feedback\'">\n\n            <div class="bg-white rate-over-all">\n                <ion-row>\n                    <ion-col col-6>\n                        <div class="rate">\n                            <span>Overall</span>\n                            <ion-icon name="md-star" class="active"></ion-icon>\n                            <ion-icon name="md-star" class="active"></ion-icon>\n                            <ion-icon name="md-star" class="active"></ion-icon>\n                            <ion-icon name="md-star" class="active"></ion-icon>\n                            <ion-icon name="md-star"></ion-icon>\n                            <span>(124)</span>\n                        </div>\n                    </ion-col>\n                    <ion-col col-6 style="padding-right: 0;">\n                        <div class="rate">\n                            <span>Short By</span>\n                            <ion-select [(ngModel)]="Short" interface="popover" class="location">\n                                <ion-option value="n1">Recent</ion-option>\n                                <ion-option value="n2">Oldest</ion-option>\n                            </ion-select>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/profile1.png">\n                    </ion-avatar>\n                    <h2><span>To</span> Dr. Josephan Williamson</h2>\n                    <p><span>Visited For</span> Cardiac Surgeon</p>\n                    <div class="rate">\n                        <strong>4.5</strong>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star"></ion-icon>\n                        <span>20 Dec 2017</span>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/profile1.png">\n                    </ion-avatar>\n                    <h2><span>To</span> Dr. Josephan Williamson</h2>\n                    <p><span>Visited For</span> Cardiac Surgeon</p>\n                    <div class="rate">\n                        <strong>4.5</strong>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star"></ion-icon>\n                        <span>20 Dec 2017</span>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/profile1.png">\n                    </ion-avatar>\n                    <h2><span>To</span> Dr. Josephan Williamson</h2>\n                    <p><span>Visited For</span> Cardiac Surgeon</p>\n                    <div class="rate">\n                        <strong>4.5</strong>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star"></ion-icon>\n                        <span>20 Dec 2017</span>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n                </ion-card-content>\n            </ion-card>\n            <ion-card>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="assets/imgs/profile1.png">\n                    </ion-avatar>\n                    <h2><span>To</span> Dr. Josephan Williamson</h2>\n                    <p><span>Visited For</span> Cardiac Surgeon</p>\n                    <div class="rate">\n                        <strong>4.5</strong>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star" class="active"></ion-icon>\n                        <ion-icon name="md-star"></ion-icon>\n                        <span>20 Dec 2017</span>\n                    </div>\n                </ion-item>\n                <ion-card-content>\n                    Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards.\n                </ion-card-content>\n            </ion-card><br><br>\n            <button ion-button full class="btn success fixed" (click)="addfeedback()"><ion-icon name="md-thumbs-up"></ion-icon>Give Feedback</button>\n        </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\doctorprofile\doctorprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], DoctorprofilePage);
    return DoctorprofilePage;
}());

//# sourceMappingURL=doctorprofile.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentbookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatwithdoctor_chatwithdoctor__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentbookPage = /** @class */ (function () {
    function AppointmentbookPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AppointmentbookPage.prototype.chatwithdoctor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatwithdoctor_chatwithdoctor__["a" /* ChatwithdoctorPage */]);
    };
    AppointmentbookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appointmentbook',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\appointmentbook\appointmentbook.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Select Date & Time\n        </ion-title>\n    </ion-navbar>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile1.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n        </ion-item>\n    </ion-card>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div class="calender-container">\n        <div class="calander">\n            <div class="calander-row">\n                <div class="day active"><span>MON</span>12</div>\n                <div class="day"><span>TUE</span>13</div>\n                <div class="day"><span>WED</span>14</div>\n                <div class="day"><span>THU</span>15</div>\n                <div class="day"><span>FRI</span>16</div>\n                <div class="day"><span>SAT</span>17</div>\n                <div class="day"><span>SUN</span>18</div>\n            </div>\n        </div>\n    </div>\n    <div class="icon-calander">\n        <ion-icon name="md-calendar" class="text-success"></ion-icon>\n    </div>\n    <div padding>\n        <p>Available Times</p>\n        <div class="timeing">\n            <ion-row>\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n                <ion-col col-3><span>01:30 PM</span></ion-col>\n            </ion-row>\n        </div>\n        <p>Appointment for...</p>\n        <div class="difault-form">\n            <ion-item class="bg-light">\n                <ion-input type="text" placeholder="Full Name"></ion-input>\n            </ion-item>\n            <ion-item class="bg-light">\n                <ion-input type="password" placeholder="Phone Number"></ion-input>\n            </ion-item>\n            <br>\n            <button ion-button full class="btn success fixed" (click)="chatwithdoctor()">Confirm Appointment</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\appointmentbook\appointmentbook.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AppointmentbookPage);
    return AppointmentbookPage;
}());

//# sourceMappingURL=appointmentbook.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddfeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddfeedbackPage = /** @class */ (function () {
    function AddfeedbackPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AddfeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addfeedback',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\addfeedback\addfeedback.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Give Feedback\n        </ion-title>\n    </ion-navbar>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile1.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n        </ion-item>\n    </ion-card>\n</ion-header>\n\n<ion-content class="bg-light">\n    <div class="feedback" padding>\n        <p>Overall experience With Doctor</p>\n        <h3>\n            <ion-icon name="md-star"></ion-icon>\n            <ion-icon name="md-star"></ion-icon>\n            <ion-icon name="md-star"></ion-icon>\n            <ion-icon name="md-star"></ion-icon>\n            <ion-icon name="md-star"></ion-icon>\n        </h3>\n    </div>\n    <div class="feedback difault-form" padding>\n        <p>Visited Docotor for...</p>\n        <ion-item>\n            <ion-input type="text" placeholder="eg. Hear pain, Body Ache etc. "></ion-input>\n        </ion-item>\n    </div>\n    <div class="feedback difault-form" padding>\n        <p>How was your experiece?</p>\n        <ion-item>\n            <ion-textarea type="text" placeholder="Wright your experiece" style="min-height: 100px;"></ion-textarea>\n        </ion-item>\n    </div>\n    <br>\n    <button ion-button full class="btn success fixed">Submit Feedbback</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\addfeedback\addfeedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AddfeedbackPage);
    return AddfeedbackPage;
}());

//# sourceMappingURL=addfeedback.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(256);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_account__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_chats_chats__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_appts_appts__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forgotpassword_forgotpassword__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_location_location__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_finddoctor_finddoctor__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_specilities_specilities__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_doctroslist_doctroslist__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_map_map__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_doctorprofile_doctorprofile__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_feedback_feedback__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_appointment_appointment__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_appointmentbook_appointmentbook__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_addfeedback_addfeedback__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_chatwithdoctor_chatwithdoctor__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_lab_lab__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_destination_destination__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_labdetails_labdetails__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tests_tests__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_medical_medical__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_medicalmap_medicalmap__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_medicaldetail_medicaldetail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_appointmentdetail_appointmentdetail__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_chatscreen_chatscreen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_myfeedbacks_myfeedbacks__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_blogs_blogs__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_readblog_readblog__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_aboutus_aboutus__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_help_help__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_settings_settings__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ng2_translate_src_translate_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_http__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_translate_ng2_translate__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_42_ng2_translate_src_translate_service__["c" /* TranslateStaticLoader */](http, 'assets/i18n', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appts_appts__["a" /* ApptsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_finddoctor_finddoctor__["a" /* FinddoctorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_specilities_specilities__["a" /* SpecilitiesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_doctroslist_doctroslist__["a" /* DoctroslistPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_appointmentbook_appointmentbook__["a" /* AppointmentbookPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_doctorprofile_doctorprofile__["a" /* DoctorprofilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_addfeedback_addfeedback__["a" /* AddfeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chatwithdoctor_chatwithdoctor__["a" /* ChatwithdoctorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_lab_lab__["a" /* LabPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_labdetails_labdetails__["a" /* LabdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_destination_destination__["a" /* DestinationPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tests_tests__["a" /* TestsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_medical_medical__["a" /* MedicalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_medicalmap_medicalmap__["a" /* MedicalmapPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_medicaldetail_medicaldetail__["a" /* MedicaldetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_appointmentdetail_appointmentdetail__["a" /* AppointmentdetailPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_chatscreen_chatscreen__["a" /* ChatscreenPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_myfeedbacks_myfeedbacks__["a" /* MyfeedbacksPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_blogs_blogs__["a" /* BlogsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_readblog_readblog__["a" /* ReadblogPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_44_ng2_translate_ng2_translate__["a" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_42_ng2_translate_src_translate_service__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_43__angular_http__["a" /* Http */]]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_appts_appts__["a" /* ApptsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_finddoctor_finddoctor__["a" /* FinddoctorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_specilities_specilities__["a" /* SpecilitiesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_doctroslist_doctroslist__["a" /* DoctroslistPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_appointmentbook_appointmentbook__["a" /* AppointmentbookPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_doctorprofile_doctorprofile__["a" /* DoctorprofilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_appointment_appointment__["a" /* AppointmentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_addfeedback_addfeedback__["a" /* AddfeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chatwithdoctor_chatwithdoctor__["a" /* ChatwithdoctorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_lab_lab__["a" /* LabPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_labdetails_labdetails__["a" /* LabdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_destination_destination__["a" /* DestinationPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tests_tests__["a" /* TestsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_medical_medical__["a" /* MedicalPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_medicalmap_medicalmap__["a" /* MedicalmapPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_medicaldetail_medicaldetail__["a" /* MedicaldetailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_appointmentdetail_appointmentdetail__["a" /* AppointmentdetailPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_chatscreen_chatscreen__["a" /* ChatscreenPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_myfeedbacks_myfeedbacks__["a" /* MyfeedbacksPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_blogs_blogs__["a" /* BlogsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_readblog_readblog__["a" /* ReadblogPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';
//import { HomePage } from '../pages/home/home';

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
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            //splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatscreen_chatscreen__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatsPage.prototype.chatscreen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatscreen_chatscreen__["a" /* ChatscreenPage */]);
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\chats\chats.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Chats\n            <ion-icon name="md-add" float-right></ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card (click)="chatscreen()">\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile1.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <span>2 min ago</span>\n        </ion-item>\n        <ion-card-content>\n            <ion-row class="appot-detail">\n                <ion-col class="icon">\n                    <ion-icon name="md-chatbubbles" class="text-danger"></ion-icon>\n                </ion-col>\n                <ion-col class="detail">\n                    Yes sure,Can you click a picture and send me?\n                </ion-col>\n                <ion-col class="option">\n                    <ion-icon name="ios-arrow-forward"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile1.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <span>2 min ago</span>\n        </ion-item>\n        <ion-card-content>\n            <ion-row class="appot-detail">\n                <ion-col class="icon">\n                    <ion-icon name="md-chatbubbles" class="text-danger"></ion-icon>\n                </ion-col>\n                <ion-col class="detail">\n                    Yes sure,Can you click a picture and send me?\n                </ion-col>\n                <ion-col class="option">\n                    <ion-icon name="ios-arrow-forward"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile1.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <span>2 min ago</span>\n        </ion-item>\n        <ion-card-content>\n            <ion-row class="appot-detail">\n                <ion-col class="icon">\n                    <ion-icon name="md-chatbubbles" class="text-danger"></ion-icon>\n                </ion-col>\n                <ion-col class="detail">\n                    Yes sure,Can you click a picture and send me?\n                </ion-col>\n                <ion-col class="option">\n                    <ion-icon name="ios-arrow-forward"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\chats\chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApptsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointmentdetail_appointmentdetail__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApptsPage = /** @class */ (function () {
    function ApptsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ApptsPage.prototype.appointmentdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__appointmentdetail_appointmentdetail__["a" /* AppointmentdetailPage */]);
    };
    ApptsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appts',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\appts\appts.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            My Appointments\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item (click)="appointmentdetail()">\n            <h2>Dr.Joseph Williamson</h2>\n            <small>Complete your profile</small>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\appts\appts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ApptsPage);
    return ApptsPage;
}());

//# sourceMappingURL=appts.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationPage = /** @class */ (function () {
    function LocationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LocationPage.prototype.tabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\location\location.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-icon name="md-search" padding-left padding-right></ion-icon>\n            Search Location\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-item (click)="tabs()">\n        Select current location\n        <ion-icon name="md-locate" item-end></ion-icon>\n    </ion-item>\n    <div class="my-map">\n        <img src="assets/imgs/map.png" style="position: absolute;height: calc(100% - 50px);bottom: 0;">\n    </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\location\location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinddoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__specilities_specilities__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinddoctorPage = /** @class */ (function () {
    function FinddoctorPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.location = "n1";
    }
    FinddoctorPage.prototype.specilities = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__specilities_specilities__["a" /* SpecilitiesPage */]);
    };
    FinddoctorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-finddoctor',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\finddoctor\finddoctor.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Find Doctor\n            <span><small  margin-right>Location</small>\n            <ion-select [(ngModel)]="location" interface="popover" class="location">\n                <ion-option value="n1">Wallington</ion-option>\n                <ion-option value="n2">Nerobi</ion-option>\n                <ion-option value="n3">Central Park</ion-option>\n              </ion-select>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Doctor, specialities, clinic"></ion-searchbar>\n\n    <div class="recent-search bg-white">\n        <p class="text-danger">Recent Search<span float-right class="text-success">Clear History</span></p>\n        <ion-list>\n            <ion-item>\n                <img src="assets/imgs/recent.png" item-start>\n                <span>\n                    Cardiologist\n                </span>\n            </ion-item>\n            <ion-item>\n                <img src="assets/imgs/recent.png" item-start>\n                <span>\n                    Cardiovascular surgeon\n                </span>\n\n\n            </ion-item>\n            <ion-item>\n                <img src="assets/imgs/recent.png" item-start>\n                <span>\n                    Appolo hospital\n                </span>\n            </ion-item>\n        </ion-list>\n    </div>\n\n    <div class="quick-link bg-white">\n        <p class="text-danger">Quick Links</p>\n        <ion-list>\n            <ion-item (click)="specilities()">\n                <img src="assets/imgs/ic_doctors.png" item-start>\n                <span>\n                    Doctor\n                    <small>Allergist, Cardiologists, Dermatologiest</small>\n                </span>\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                <img src="assets/imgs/ic_dentist.png" item-start>\n                <span>\n                    Dentist\n                    <small>Dentists, Prosthodonitions etc.</small>\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                <img src="assets/imgs/ic_ayurvedic.png" item-start>\n                <span>\n                    Dentist\n                    <small>Ayurveda experties, Homeoprthi, etc </small>\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n            <ion-item>\n                <img src="assets/imgs/ic_therapist.png" item-start>\n                <span>\n                    Therapst & Nutritionists\n                    <small>Acupunturist, Physiotherapist, etc</small>\n                </span>\n\n                <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n            </ion-item>\n        </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\finddoctor\finddoctor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FinddoctorPage);
    return FinddoctorPage;
}());

//# sourceMappingURL=finddoctor.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\feedback\feedback.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Doctor Profile Feedback\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="assets/imgs/profile1.png">\n            </ion-avatar>\n            <h2>Dr. Josephan Williamson</h2>\n            <p>Cardiac Surgeon</p>\n            <button ion-button clear class="btn success">Book</button>\n        </ion-item>\n        <ion-card-content>\n            At apple hospital, Walter street, Wallington\n            <div class="img-container">\n                <div class="imges-row">\n                    <img src="assets/imgs/img-1.png">\n                    <img src="assets/imgs/img-2.png">\n                    <img src="assets/imgs/img-3.png">\n                    <img src="assets/imgs/img-4.png">\n                    <img src="assets/imgs/img-5.png">\n                </div>\n            </div>\n        </ion-card-content>\n        <ion-row class="about-row">\n            <ion-col col-5 center text-left>\n                Experience <strong>22 Years</strong>\n            </ion-col>\n            <ion-col center text-center>\n                Fee <strong>$30</strong>\n            </ion-col>\n            <ion-col col-5 center text-right>\n                Feedback\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star" class="active"></ion-icon>\n                <ion-icon name="md-star"></ion-icon>\n                <span>&nbsp;&nbsp;(123)</span>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\feedback\feedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestsPage = /** @class */ (function () {
    function TestsPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    TestsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tests',template:/*ion-inline-start:"D:\ionic\appointment\git\appointmentapp\src\pages\tests\tests.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-icon name="md-close" (click)="dismiss()"></ion-icon>&nbsp;&nbsp;&nbsp;Search\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-light">\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for tests"></ion-searchbar>\n    <ion-list>\n        <ion-item>\n            Acetoacetate<strong>40 $</strong>\n        </ion-item>\n        <ion-item>\n            Acetoaceti Acid<strong>20 $</strong>\n        </ion-item>\n        <ion-item>\n            Acetone<strong>10 $</strong>\n        </ion-item>\n        <ion-item>\n            Acetylcholine Receptor<strong>23 $</strong>\n        </ion-item>\n        <ion-item>\n            Acetylcholine Receptor Antibody<strong>15 $</strong>\n        </ion-item>\n        <ion-item>\n            Acetylcholine Receptor Binding<strong>47 $</strong>\n        </ion-item>\n        <ion-item>\n            Acetylcholine Receptor Blocking<strong>50 $</strong>\n        </ion-item>\n        <ion-item>\n            Acetylcholine Modulating Antibody<strong>35 $</strong>\n        </ion-item>\n        <ion-item>\n            Acetylsalicylic Acide<strong>19 $</strong>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\appointment\git\appointmentapp\src\pages\tests\tests.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], TestsPage);
    return TestsPage;
}());

//# sourceMappingURL=tests.js.map

/***/ })

},[237]);
//# sourceMappingURL=main.js.map