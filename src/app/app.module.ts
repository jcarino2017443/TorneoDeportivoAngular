import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LigasComponent } from './componentes/ligas/ligas.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import{ AngularFireModule } from "@angular/fire"
import { environment } from 'src/environments/environment.prod';
import { EquiposComponent } from './componentes/equipos/equipos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraficasComponent,
    TablaComponent,
    LoginComponent,
    UsuariosComponent,
    RegistroComponent,
    LigasComponent,
    PerfilComponent,
    EquiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
