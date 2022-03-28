import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Views/header/header.component';
import { FooterComponent } from './Views/footer/footer.component';
import { CombustibleFormComponent } from './Administrador/Views/Form/combustible-form/combustible-form.component';
import { ColorFormComponent } from './Administrador/Views/Form/color-form/color-form.component';
import { TransmicionFormComponent } from './Administrador/Views/Form/transmicion-form/transmicion-form.component';
import { TipoFormComponent } from './Administrador/Views/Form/tipo-form/tipo-form.component';
import { MarcaFormComponent } from './Administrador/Views/Form/marca-form/marca-form.component';
import { ModeloFormComponent } from './Administrador/Views/Form/modelo-form/modelo-form.component';
import { VehiculoFormComponent } from './Administrador/Views/Form/vehiculo-form/vehiculo-form.component';
import { CombustibleListComponent } from './Administrador/Views/Listas/combustible-list/combustible-list.component';
import { TransmicionListComponent } from './Administrador/Views/Listas/transmicion-list/transmicion-list.component';
import { ColorListComponent } from './Administrador/Views/Listas/color-list/color-list.component';
import { TipoListComponent } from './Administrador/Views/Listas/tipo-list/tipo-list.component';
import { ModeloListComponent } from './Administrador/Views/Listas/modelo-list/modelo-list.component';
import { MarcaListComponent } from './Administrador/Views/Listas/marca-list/marca-list.component';
import { VehiculoListComponent } from './Administrador/Views/Listas/vehiculo-list/vehiculo-list.component';
import { ApartadoListComponent } from './Administrador/Views/Listas/apartado-list/apartado-list.component';
import { CitasListComponent } from './Administrador/Views/Listas/citas-list/citas-list.component';
import { UserListComponent } from './Administrador/Views/Listas/user-list/user-list.component';
import { OrdenListComponent } from './Administrador/Views/Listas/orden-list/orden-list.component';
import { VehiculosListComponent } from './Cliente/Views/Listas/vehiculos-list/vehiculos-list.component';
import { DetalleVehiculoListComponent } from './Cliente/Views/Listas/detalle-vehiculo-list/detalle-vehiculo-list.component';
import { ComprasListComponent } from './Cliente/Views/Listas/compras-list/compras-list.component';
import { CarritoCompraListComponent } from './Cliente/Views/Listas/carrito-compra-list/carrito-compra-list.component';
import { PasarelaPagoComponent } from './Cliente/Views/Listas/pasarela-pago/pasarela-pago.component';
import { OffCanvasComponent } from './Views/off-canvas/off-canvas.component';
import { NosotrosComponent } from './Cliente/Views/Otros/nosotros/nosotros.component';
import { PreguntasComponent } from './Cliente/Views/Otros/preguntas/preguntas.component';
import { ErrorComponent } from './Views/error/error.component';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/login/login.component';
import { RegistrarseComponent } from './Views/registrarse/registrarse.component';
import { DashboardComponent } from './Administrador/Views/Otras/dashboard/dashboard.component';
import { FormulariosComponent } from './Administrador/Views/Otras/formularios/formularios.component';
import { ListadosComponent } from './Administrador/Views/Otras/listados/listados.component';
import { ApartadoClienteListComponent } from './Cliente/Views/Listas/apartado-cliente-list/apartado-cliente-list.component';
import { CitaClienteListComponent } from './Cliente/Views/Listas/cita-cliente-list/cita-cliente-list.component';
import { ApartadosService } from './Services/apartados.service';
import { ApiServiceService } from './Services/api-service.service';
import { CarritoCompraService } from './Services/carrito-compra.service';
import { CitaService } from './Services/citas.service';
import { ColorService } from './Services/color.service';
import { CombustibleService } from './Services/combustible.service';
import { DetalleOrdenService } from './Services/detalle-orden.service';
import { MarcaService } from './Services/marca.service';
import { ModeloService } from './Services/modelo.service';
import { OrdenService } from './Services/orden.service';
import { TipoService } from './Services/tipo.service';
import { TransmicionService } from './Services/transmicion.service';
import { VehiculoService } from './Services/vehiculo.service';
import { EditColorComponent } from './Administrador/Views/Edit/edit-color/edit-color.component';
import { EditCombustibleComponent } from './Administrador/Views/Edit/edit-combustible/edit-combustible.component';
import { EditMarcaComponent } from './Administrador/Views/Edit/edit-marca/edit-marca.component';
import { EditModeloComponent } from './Administrador/Views/Edit/edit-modelo/edit-modelo.component';
import { EditTipoComponent } from './Administrador/Views/Edit/edit-tipo/edit-tipo.component';
import { EditTransmicionComponent } from './Administrador/Views/Edit/edit-transmicion/edit-transmicion.component';
import { EditVehiculoComponent } from './Administrador/Views/Edit/edit-vehiculo/edit-vehiculo.component';
import { CitaFormComponent } from './Cliente/Views/Form/cita-form/cita-form.component';
import { EditUserComponent } from './Administrador/Views/Edit/edit-user/edit-user.component';
import { EditComentarioComponent } from './Administrador/Views/Edit/edit-comentario/edit-comentario.component';
import { ComentariosListaComponent } from './Administrador/Views/Listas/comentarios-lista/comentarios-lista.component';
import { FormCalificarVehiculoComponent } from './Cliente/Views/Form/form-calificar-vehiculo/form-calificar-vehiculo.component';
import { AdminGuardGuard } from './Guards/admin-guard.guard';
import { UserGuardGuard } from './Guards/user-guard.guard';
import { IsLoggedGuardGuard } from './Guards/is-logged-guard.guard';
import { AuthInterceptor } from './Guards/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CombustibleFormComponent,
    ColorFormComponent,
    TransmicionFormComponent,
    TipoFormComponent,
    MarcaFormComponent,
    ModeloFormComponent,
    VehiculoFormComponent,
    CombustibleListComponent,
    TransmicionListComponent,
    ColorListComponent,
    TipoListComponent,
    ModeloListComponent,
    MarcaListComponent,
    VehiculoListComponent,
    ApartadoListComponent,
    CitasListComponent,
    UserListComponent,
    OrdenListComponent,
    VehiculosListComponent,
    DetalleVehiculoListComponent,
    ComprasListComponent,
    CarritoCompraListComponent,
    PasarelaPagoComponent,
    OffCanvasComponent,
    NosotrosComponent,
    PreguntasComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    RegistrarseComponent,
    DashboardComponent,
    FormulariosComponent,
    ListadosComponent,
    ApartadoClienteListComponent,
    CitaClienteListComponent,
    EditColorComponent,
    EditCombustibleComponent,
    EditMarcaComponent,
    EditModeloComponent,
    EditTipoComponent,
    EditTransmicionComponent,
    EditVehiculoComponent,
    CitaFormComponent,
    EditUserComponent,
    EditComentarioComponent,
    ComentariosListaComponent,
    FormCalificarVehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApartadosService, 
    ApiServiceService, 
    CarritoCompraService, 
    CitaService, 
    ColorService, 
    CombustibleService,
    DetalleOrdenService,
    MarcaService,
    ModeloService,
    OrdenService,
    TipoService,
    TransmicionService,
    VehiculoService, 
    AdminGuardGuard, 
    UserGuardGuard, 
    IsLoggedGuardGuard,
    {
      provide : HTTP_INTERCEPTORS, 
      useClass : AuthInterceptor, 
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
