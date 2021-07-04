import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   //api_url = 'https://back.derivadadeeuler.com/api/';
    api_url = 'http://127.0.0.1:3000/';
    base_url: string = '';
    constructor(public httpClient: HttpClient
                ) {
     }

    list(options?: any): Observable<any>  {
        if(options)
          options = this.setHttpParams(options);
        return this.httpClient.get(this.api_url + this.base_url, options);
    }

    getById(id: string | number, options?: any): Observable<any>  {
        return this.httpClient.get(this.api_url + this.base_url + '/' + id, options);
    }

    create(body: any, options?: any): Observable<any> {
        return this.httpClient.post(`${this.api_url}${this.base_url}`, body, options);
    }

    update(body: any, options?: any): Observable<any> {
        return this.httpClient.put(`${this.api_url}${this.base_url}/${body.id}`, body, options);
    }

     delete(id: string | number, options?: any): Observable<any> {
        return this.httpClient.delete(`${this.api_url}${this.base_url}/${id}`, options);
    }

    setHttpParams(options: any) {
      let params = new HttpParams();
      Object.getOwnPropertyNames(options).forEach(key => {
        params = params.set(key, options[key]);
      });
      return {params: params};
    }

}
