import { Component, OnInit } from '@angular/core';
import {RestServiceBusqueda} from './rest.service';
import {ReqRes} from './request-response';
import{Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {


  public resultados: any[] =[];
    public resultadosAddress: any[] =[];
  public page : number=0;
  constructor(private restService: RestServiceBusqueda, private activatedRoute:ActivatedRoute){

  }
  cargarProductos():void{
this.activatedRoute.params.subscribe(params =>{
let id=params["palabra"];
this.restService.getBusqueda(id).subscribe((respuesta) =>{
this.resultados = respuesta.results;
console.log(this.resultados);

})
    })

    this.activatedRoute.params.subscribe(params =>{
    let id=params["palabra"];
    this.restService.getBusqueda(id).subscribe((resp) =>{
    this.resultadosAddress = resp.results;
    console.log(resp.results);

    })
        })



  }
public obtenResultados(palabra: string):void{


   this.restService.getBusqueda(palabra).subscribe((respuesta) =>{
   this.resultados = respuesta.results;
   console.log(this.resultados);



  })
}

  ngOnInit(): void{

this.cargarProductos();
  }

cargarSiguiente(){
  this.page += 4;

  console.log(this.page);
}
cargarAnterior(){
  if (this.page >0) {
    this.page -= 4;
  }
}


  }
