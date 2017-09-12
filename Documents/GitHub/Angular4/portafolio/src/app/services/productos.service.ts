import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = true;

  constructor(public http: Http) {
    this.cargar_productos();
  }

  public cargar_productos(){
    this.cargando = true;
    this.http.get("https://pagina-web-9e5ba.firebaseio.com/productos_idx.json")
      .subscribe( res => {
        //setTimeout( ()=>{
          this.productos = res.json();
          this.cargando = false;
        //},1500);
      });
  }
}
