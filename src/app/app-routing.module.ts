import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import {TablaComponent} from './componentes/tabla/tabla.component'
import {LoginComponent} from './componentes/login/login.component'

import {RegistroComponent} from './componentes/registro/registro.component'
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { LigasComponent } from './componentes/ligas/ligas.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';

const routes: Routes = [
  {path: 'graficas', component: GraficasComponent},
  {path: 'tabla', component: TablaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'usuarios', component: UsuariosComponent },
  {path: 'ligas', component: LigasComponent},
  {path: 'equipos', component: EquiposComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
