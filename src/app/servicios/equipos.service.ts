import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Equipos } from '../modelos/equipos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'applcation/json');
  public token;
  public identidad;
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url
  }

  agrgarEquipos(equipos: Equipos): Observable<any>{
    let params = JSON.stringify(equipos);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.post(this.ruta + 'agrgarEquipos', params, {headers: headersToken});

  }

  obtenerEquipos(): Observable<any>{

    return this._http.get(this.ruta + 'obtenerEquipos', {headers: this.headersVariable});
  }

  obtenerEquiposID(id:String): Observable<any>{
    return this._http.get(this.ruta + 'obtenerEquiposID/' + id, {headers: this.headersVariable})
  }

  editarEquipos(equipos: Equipos): Observable<any>{
    let params = JSON.stringify(equipos);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarEquipos/' + equipos._id, params, { headers: headersToken});
  }

  eliminarEquipos(id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.delete(this.ruta + 'eliminarEquipos/' + id, {headers: headersToken});
  }


  obtenerIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad' ) || '{}');
    if(identidad2 != 'undefined'){
      this.identidad = identidad2;
    }else{
      this.identidad = null;
    }

    return this.identidad;
  }


  obtenerToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }

    return this.token;
  }
}
