import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent}  from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {ProductoComponent} from './producto/producto.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FitroPipe } from './busqueda/pipes/fitro.pipe';
import {InterceptorService} from './interceptors/interceptor.service';

const routes: Routes =[
{path: '', redirectTo: '/busqueda', pathMatch: 'full'},

{path: 'productos', component:ProductoComponent },
{path: 'productos/:id', component:ProductoComponent },
{path: 'busqueda', component:BusquedaComponent },
{path: 'busqueda/:palabra', component:BusquedaComponent }
];


@NgModule({


  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    BusquedaComponent,
    FitroPipe

  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ BusquedaComponent,
{provide: HTTP_INTERCEPTORS,
useClass: InterceptorService,
multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
