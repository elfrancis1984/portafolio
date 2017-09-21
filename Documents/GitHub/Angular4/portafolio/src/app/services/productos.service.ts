import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando:boolean = true;

  constructor(public http: Http) {
    this.cargar_productos();
  }

  public buscar_producto( termino:string ){
    if(this.productos.length === 0){
      this.cargar_productos().then(()=>{
        this.filtrar_producto(termino);
      });
    }else{
      this.filtrar_producto(termino);
    }
  }

  private filtrar_producto(termino:string){
    this.productos_filtrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach( producto => {
      //console.log(producto);
      if(producto.categoria.indexOf(termino) >= 0 || producto.titulo.toLowerCase().indexOf(termino) >= 0){
          this.productos_filtrado.push(producto);
      }
    });
  }

  public cargar_producto( cod:string ){
    return this.http.get(`https://pagina-web-9e5ba.firebaseio.com/productos/${cod}.json`);
  }

  public cargar_productos(){
    this.cargando = true;
    let promesa = new Promise( (resolve, reject) => {
      this.http.get("https://pagina-web-9e5ba.firebaseio.com/productos_idx.json")
      .subscribe( res => {
        //setTimeout( ()=>{
        this.productos = res.json();
        this.cargando = false;
        //},1500);
      });
    });
    return promesa;
  }
}
