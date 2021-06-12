import { Component, OnInit } from '@angular/core';
import {RestService} from './rest.service';
import {ReqRes} from './request-response';
import{Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  public producto: any =[];
  public productoIMG : any=[];
  public productoDesc : any =[];


  constructor(private restService: RestService, private activatedRoute:ActivatedRoute){}
  cargarProducto():void{
this.activatedRoute.params.subscribe(params =>{
let id=params["id"];
    if (id) {
              this.restService.get(id).subscribe((respuesta) =>{
              this.producto = respuesta;
              this.productoIMG = respuesta.pictures[0].url;
             })
              this.restService.getDesc(id).subscribe((resp) =>{
              this.productoDesc = resp;
             })
           }
    })
  }

  ngOnInit(): void{
this.cargarProducto();

  }

}
