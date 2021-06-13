import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpErrorResponse, HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>,next : HttpHandler): Observable<HttpEvent<any>>{

const reqClone = req.clone({



});
return next.handle(reqClone).pipe(
catchError(this.manejaErrores)

);
  }

  manejaErrores(error: HttpErrorResponse){
console.log('sucedio un error');
console.log('Registrado en el log file');
console.warn(error);
return throwError('Error personalizado');

  }

}
