import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReqRes} from './request-response';
@Injectable({
  providedIn: 'root'
})
export class RestServiceBusqueda{
  private url:string = 'https://api.mercadolibre.com/sites/MLA/search?q=:';
  constructor(private http: HttpClient ) { };

  public getBusqueda(palabra:string){

    return this.http.get<ReqRes>(`${this.url}${palabra}`);
  };
}
