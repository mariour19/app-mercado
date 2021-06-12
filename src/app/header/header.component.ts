import {Component} from '@angular/core';
import {BusquedaComponent} from '../busqueda/busqueda.component';
import {RestServiceBusqueda} from '../busqueda/rest.service';
import{Router, ActivatedRoute} from '@angular/router';

@Component ({
selector : 'app-header',
templateUrl : './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent{
title:string = 'Mercado libre';
palabra :string ='';

constructor( private busqueda: BusquedaComponent,  private activatedRoute:ActivatedRoute, private router: Router){}

cambiaPalabra(): void {
this.palabra =(<HTMLInputElement>document.getElementById("pal")).value;

this.router.navigate(['/busqueda', this.palabra])


}
ngOnInit(): void{


}

}
