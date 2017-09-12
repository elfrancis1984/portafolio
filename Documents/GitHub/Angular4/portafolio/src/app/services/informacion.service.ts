import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  equipo:any[] = [];

  constructor(public http: Http ) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info(){
    this.http.get("assets/data/info.pagina.json")
      .subscribe( data => {
        this.info = data.json();
      });
  }

  public carga_sobre_nosotros(){
    this.http.get("https://pagina-web-9e5ba.firebaseio.com/equipo.json")
      .subscribe( data => {
        this.equipo = data.json();
      });
  }

}
