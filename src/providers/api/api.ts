import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  url: string = 'http://41.65.9.67:8090/besh-booking/rest';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  get(endpoint: string, params?: any, options?: any) {
    if (!options) {
      options = {};
    }

    // Support easy query params for GET requests
    if (params) {
      const p = new HttpParams()
      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          p.set(k, params[k]);
        }
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    return this.http.get(this.url + '/' + endpoint, options);
  }

  post(endpoint: string, body: any, options?: any) {
    return this.http.post(this.url + '/' + endpoint, body, options);
  }

  put(endpoint: string, body: any, options?: any) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  delete(endpoint: string, options?: any) {
    return this.http.delete(this.url + '/' + endpoint, options);
  }

  patch(endpoint: string, body: any, options?: any) {
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

}
