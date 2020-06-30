import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from 'ng2-translate';
/*
  Generated class for the TranslateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TranslateProvider {

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  subscribeChangeLang(platform) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        platform.setDir('rtl', true);
        platform.setDir('ltr', false);
      }
      else {
        platform.setDir('ltr', true);
        platform.setDir('rtl', false);
      }
    });
  }

  getCurrentLang() {
    return this.translate.currentLang;
  }

  setLangToAR() {
    this.translate.use('ar');
  }

  setLangToEn() {
    this.translate.use('en');
  }

  onTranslate(trs, val) {
    this.translate.get(trs, { value: val }).subscribe((res: string) => {
      console.log(res);
      //=> 'Hello Dayana'
    });
  }

}


