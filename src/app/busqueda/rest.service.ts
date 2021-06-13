import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReqRes} from './request-response';
import {map, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestServiceBusqueda{
  private url:string = 'https://api.mercadolibre.com/sites/MLA/search?q=:';
  constructor(private http: HttpClient ) { };

  public getBusqueda(palabra:string){

    return this.http.get<ReqRes>(`${this.url}${palabra}`)
    .pipe(map(resp=>resp),catchError(err =>{
console.log('Sucedió un error');
console.log('Registrado en el log file');
      return throwError('ERROR PERSONALIZADO');
    }));
  };
}
