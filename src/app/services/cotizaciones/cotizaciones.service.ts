import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { getHeaders } from 'src/app/config/headers';
import { Urls } from 'src/app/config/utilitis';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {

  private recurso = Urls.COTIZACIONES;
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
    async new(concesionario: IConcesionarios) {
      const lDatos = JSON.stringify(concesionario);
      return await this.httpClient.post(this.url + this.recurso, lDatos, {
        headers: getHeaders()
      }).pipe(
        map((data: any) => {
          return data;
        })).toPromise();
    }
  */
}
