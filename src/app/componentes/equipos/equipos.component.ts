import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipos } from 'src/app/modelos/equipos.model';
import { EquiposService } from 'src/app/servicios/equipos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss'],
  providers: [EquiposService]
})
export class EquiposComponent implements OnInit {
  public equiposModel!: Equipos;
  public EquiposList;
  constructor(
    private _equiposService: EquiposService,
    private _router:Router
  ) {
    this.equiposModel = new Equipos("","")
  }

  ngOnInit(): void {
  }

  agregarEquipos(){
    this._equiposService.agrgarEquipos(this.equiposModel).subscribe(
    response=>{
      console.log(response);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Equipo creado correctamente',
      showConfirmButton: false,
      timer: 1500
    })

    this._router.navigate(['/equipos']);
  },
    error=>{
      console.log(<any>error)
    }
    )
  }

  obtenerEquipos(){
      this._equiposService.obtenerEquipos().subscribe((
        response) => {
          console.log(response.equipos);
          this.EquiposList = response.equipos;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Equipos Obtenidos correctamente',
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

    obtenerEquiposID(id){
      this._equiposService.obtenerEquiposID(id).subscribe(
        response=>{
          this._equiposService= response.ligaEncontrada;
          console.log(response.ligaEncontrada);

        }
      )
    }

    editarEquipos(){
      this._equiposService.editarEquipos(this.equiposModel).subscribe(
        response=>{
          console.log(response);
          this.obtenerEquipos();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Equipo editado correctamente',
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

    eliminarEquipos(id){
      this._equiposService.eliminarEquipos(id).subscribe(
        response=>{
          console.log(response);
          this.obtenerEquipos();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Equipo eliminado correctamente',
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
