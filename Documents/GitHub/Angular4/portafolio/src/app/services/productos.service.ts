import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando_productos:boolean = true;

  constructor(public http: Http) {
    this.cargar_productos();
  }

  public cargar_productos(){
    this.cargando_productos = true;
    this.http.get("https://pagina-web-9e5ba.firebaseio.com/productos_idx.json")
      .subscribe( res => {
        //console.log(res.json());
        this.productos = res.json();
        this.cargando_productos = false;
      });
  }
}
