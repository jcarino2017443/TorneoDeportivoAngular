import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Ligas } from '../modelos/ligas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigasService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'applcation/json');
  public token;
  public identidad;
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url
  }

  agregarLigas(ligas: Ligas): Observable<any>{
    let params = JSON.stringify(ligas);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.post(this.ruta + 'agregarLigas', params, {headers: headersToken});

  }

  obtenerLigas(): Observable<any>{

    return this._http.get(this.ruta + 'visualizarLigas', {headers: this.headersVariable});
  }

  obtenerLigasID(id:String): Observable<any>{
    return this._http.get(this.ruta + 'obtenerLigasId/' + id, {headers: this.headersVariable})
  }

  editarLigas(ligas: Ligas): Observable<any>{
    let params = JSON.stringify(ligas);
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.put(this.ruta + 'editarLigas/', params, { headers: headersToken});
  }

  eliminarLigas(id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken())

    return this._http.delete(this.ruta + 'eliminarLigas/' + id, {headers: headersToken});
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
