import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { getHeaders } from 'src/app/config/headers';
import { Urls } from 'src/app/config/utilitis';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private recurso = Urls.VEHICULOS;
  private url = Urls.URL_API

  constructor(
    private httpClient: HttpClient,

  ) { }



  async getAll() {
    return await this.httpClient.get(this.url + this.recurso, {
      headers: getHeaders()
    }).pipe(
      map((data: any) => {
        return data;
      })).toPromise();
  }

  /*
    async new(pDatos: any) {
      const lDatos = JSON.stringify(pDatos);
      return await this.httpClient.post(this.mUrl + this.mService, lDatos, {
        headers: getHeaders()
      }).pipe(
        map((data: any) => {
          return data;
        })).toPromise();
    }
  
  
  
    async getById(pKey: any) {
      return await this.httpClient.get(this.mUrl + this.mService + '/' + pKey, {
        headers: getHeaders()
      }).pipe(
        map((data: any) => {
          return data;
        })).toPromise();
    }
  
  
    async update(pObj: any, pKey: number) {
      const jObj = JSON.stringify(pObj);
      return await this.httpClient.put(this.mUrl + this.mService + '/' + pKey, jObj,
        { headers: getHeaders() })
        // tslint:disable-next-line: arrow-return-shorthand
        .pipe(map((data: any) => { return data; }))
        .toPromise();
    }
  
  
    async delete(pKey: number) {
      return await this.httpClient.delete(this.mUrl + this.mService + '/' + pKey,
        { headers: getHeaders() }).pipe(
          map((data: any) => {
            return data;
          })).toPromise();
    }
  */
}
