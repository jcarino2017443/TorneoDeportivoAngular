import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public usuariosList: any;
    public usuarioIDModel: Usuario;
    constructor(private _usuarioService: UsuarioService) {
      this.usuarioIDModel = new Usuario('','','','','','','');
    }

    obtenerUsuarioId(id: any){
      this._usuarioService.obtenerUsuario(id).subscribe(
        (        response: { usuarioEncontrado: Usuario; })=>{
          this.usuarioIDModel = response.usuarioEncontrado;
          console.log(response.usuarioEncontrado);

        }
      )
    }





  ngOnInit(): void {
  }

}
