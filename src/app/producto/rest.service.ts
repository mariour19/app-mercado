import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReqRes} from './request-response';
@Injectable({
  providedIn: 'root'
})
export class RestService {

private url:string = 'https://api.mercadolibre.com/items/';
  constructor(private http: HttpClient ) { }

  public get(id:string){

    return this.http.get<ReqRes>(`${this.url}/${id}`);
  }

  public getDesc(id:string){

    return this.http.get<ReqRes>(`${this.url}/${id}/description`);
  }
}
