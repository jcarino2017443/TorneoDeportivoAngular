import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ligas } from 'src/app/modelos/ligas.model';
import { Usuario } from 'src/app/modelos/usuario.model';
import { LigasService } from 'src/app/servicios/ligas.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.scss'],
  providers: [LigasService],
})
export class LigasComponent implements OnInit {
  public ligasIDModel: Ligas;
  public ligasList;
  public usurioIDModel!: Usuario;
  constructor(
    private _ligasService: LigasService,
    private _usuarioSevice: UsuarioService,
    private _router:Router
    ) {
    this.ligasIDModel = new Ligas('',
    '',
    '',
    )
   }

  ngOnInit(): void {
  }

  agregarLigas(){
  this._ligasService.agregarLigas(this.ligasIDModel).subscribe(
  response=>{
    console.log(response);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Liga creada correctamente',
    showConfirmButton: false,
    timer: 1500
  })

  this._router.navigate(['/ligas']);
},
  error=>{
    console.log(<any>error)
  }
  )
}

  obtenerLigas(){
    this._ligasService.obtenerLigas().subscribe((
      response) => {
        console.log(response.ligas);
        this.ligasList = response.ligas;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Ligas obtenidas correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position:'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  obtenerLigasID(id){
    this._ligasService.obtenerLigasID(id).subscribe(
      response=>{
        this.ligasIDModel= response.ligaEncontrada;
        console.log(response.ligaEncontrada);

      }
    )
  }

  editarLigas(){
    this._ligasService.editarLigas(this.ligasIDModel).subscribe(
      response=>{
        console.log(response);
        this.obtenerLigas();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Liga editada correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position:'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  eliminarLigas(id){
    this._ligasService.eliminarLigas(id).subscribe(
      response=>{
        console.log(response);
        this.obtenerLigas();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Liga eliminada correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
