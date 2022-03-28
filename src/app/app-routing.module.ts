import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditColorComponent } from './Administrador/Views/Edit/edit-color/edit-color.component';
import { EditCombustibleComponent } from './Administrador/Views/Edit/edit-combustible/edit-combustible.component';
import { EditMarcaComponent } from './Administrador/Views/Edit/edit-marca/edit-marca.component';
import { EditModeloComponent } from './Administrador/Views/Edit/edit-modelo/edit-modelo.component';
import { EditTipoComponent } from './Administrador/Views/Edit/edit-tipo/edit-tipo.component';
import { EditTransmicionComponent } from './Administrador/Views/Edit/edit-transmicion/edit-transmicion.component';
import { EditUserComponent } from './Administrador/Views/Edit/edit-user/edit-user.component';
import { EditVehiculoComponent } from './Administrador/Views/Edit/edit-vehiculo/edit-vehiculo.component';
import { ColorFormComponent } from './Administrador/Views/Form/color-form/color-form.component';
import { CombustibleFormComponent } from './Administrador/Views/Form/combustible-form/combustible-form.component';
import { MarcaFormComponent } from './Administrador/Views/Form/marca-form/marca-form.component';
import { ModeloFormComponent } from './Administrador/Views/Form/modelo-form/modelo-form.component';
import { TipoFormComponent } from './Administrador/Views/Form/tipo-form/tipo-form.component';
import { TransmicionFormComponent } from './Administrador/Views/Form/transmicion-form/transmicion-form.component';
import { VehiculoFormComponent } from './Administrador/Views/Form/vehiculo-form/vehiculo-form.component';
import { ApartadoListComponent } from './Administrador/Views/Listas/apartado-list/apartado-list.component';
import { CitasListComponent } from './Administrador/Views/Listas/citas-list/citas-list.component';
import { ColorListComponent } from './Administrador/Views/Listas/color-list/color-list.component';
import { CombustibleListComponent } from './Administrador/Views/Listas/combustible-list/combustible-list.component';
import { ComentariosListaComponent } from './Administrador/Views/Listas/comentarios-lista/comentarios-lista.component';
import { MarcaListComponent } from './Administrador/Views/Listas/marca-list/marca-list.component';
import { ModeloListComponent } from './Administrador/Views/Listas/modelo-list/modelo-list.component';
import { OrdenListComponent } from './Administrador/Views/Listas/orden-list/orden-list.component';
import { TipoListComponent } from './Administrador/Views/Listas/tipo-list/tipo-list.component';
import { TransmicionListComponent } from './Administrador/Views/Listas/transmicion-list/transmicion-list.component';
import { UserListComponent } from './Administrador/Views/Listas/user-list/user-list.component';
import { VehiculoListComponent } from './Administrador/Views/Listas/vehiculo-list/vehiculo-list.component';
import { DashboardComponent } from './Administrador/Views/Otras/dashboard/dashboard.component';
import { FormulariosComponent } from './Administrador/Views/Otras/formularios/formularios.component';
import { ListadosComponent } from './Administrador/Views/Otras/listados/listados.component';
import { CitaFormComponent } from './Cliente/Views/Form/cita-form/cita-form.component';
import { FormCalificarVehiculoComponent } from './Cliente/Views/Form/form-calificar-vehiculo/form-calificar-vehiculo.component';
import { ApartadoClienteListComponent } from './Cliente/Views/Listas/apartado-cliente-list/apartado-cliente-list.component';
import { CarritoCompraListComponent } from './Cliente/Views/Listas/carrito-compra-list/carrito-compra-list.component';
import { CitaClienteListComponent } from './Cliente/Views/Listas/cita-cliente-list/cita-cliente-list.component';
import { ComprasListComponent } from './Cliente/Views/Listas/compras-list/compras-list.component';
import { DetalleVehiculoListComponent } from './Cliente/Views/Listas/detalle-vehiculo-list/detalle-vehiculo-list.component';
import { PasarelaPagoComponent } from './Cliente/Views/Listas/pasarela-pago/pasarela-pago.component';
import { VehiculosListComponent } from './Cliente/Views/Listas/vehiculos-list/vehiculos-list.component';
import { NosotrosComponent } from './Cliente/Views/Otros/nosotros/nosotros.component';
import { PreguntasComponent } from './Cliente/Views/Otros/preguntas/preguntas.component';
import { AdminGuardGuard } from './Guards/admin-guard.guard';

import { TokenGuardGuard } from './Guards/token-guard.guard';
import { UserGuardGuard } from './Guards/user-guard.guard';
import { ErrorComponent } from './Views/error/error.component';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/login/login.component';
import { RegistrarseComponent } from './Views/registrarse/registrarse.component';

const routes: Routes = [

  //NO LLEVAN GURADS
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}, 
  {path: 'registrarse', component: RegistrarseComponent},

  //PANTALLAS DEL ADMINISTRADOR 
    //Dashboard
    {path: 'Dashboard', component: DashboardComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},

    //FORMULARIOS
    {path: 'FormCombustible' , component : CombustibleFormComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'FormColor' , component : ColorFormComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'FormMarca' , component : MarcaFormComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'FormModelo' , component : ModeloFormComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'FormTipo' , component : TipoFormComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'FormTransmicion' , component : TransmicionFormComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'FormVehiculo' , component : VehiculoFormComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Formularios' , component : FormulariosComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    //  OJO AQUI
    {path: 'Calificar/Vehiculo/:id' , component : FormCalificarVehiculoComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},

    //LISTAS
    {path: 'ListApartados', component: ApartadoListComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'ListCitas', component: CitasListComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'ListColores', component: ColorListComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'ListCombustibles', component: CombustibleListComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'ListMarcas', component: MarcaListComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'ListModelos', component: ModeloListComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'ListOrdenes', component: OrdenListComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'ListTipos', component: TipoListComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'ListTransmiciones', component: TransmicionListComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'ListUsers', component: UserListComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'ListVehiculos', component: VehiculoListComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Listados', component: ListadosComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Comentarios/Vehiculo/:id', component: ComentariosListaComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},

    //PANTALLAD EDITAR
    {path: 'Editar/Color/:id', component: EditColorComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Editar/Combustible/:id', component: EditCombustibleComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Editar/Cita/:id', component: EditColorComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Editar/Marca/:id', component: EditMarcaComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Editar/Modelo/:id', component: EditModeloComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Editar/Ordenes/:id', component: EditColorComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Editar/Transmicion/:id', component: EditTransmicionComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Editar/User/:id', component: EditUserComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Editar/Vehiculo/:id', component: EditVehiculoComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Editar/Tipo/:id', component: EditTipoComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},
    {path: 'Editar/Apartado /:id', component: EditColorComponent, canActivate: [AdminGuardGuard, TokenGuardGuard]},

  //PANTALLAS DEL CLIENTE
    {path: 'Vehiculos', component: VehiculosListComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path: 'Detalle/Vehiculo/:id', component: DetalleVehiculoListComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path: 'Vehiculos/Apartados/:id', component: ApartadoClienteListComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path: 'Vehiculos/Citas/:id', component: CitaClienteListComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path: 'Vehiculos/Citas/Fecha/:id', component: CitaFormComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path: 'Vehiculos/Compras/:id', component: ComprasListComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path: 'Vehiculos/CarritoCompra/:id', component: CarritoCompraListComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path: 'Vehiculos/PasarelaPago', component: PasarelaPagoComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path: 'Preguntas', component: PreguntasComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path: 'Nosotros', component: NosotrosComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},
    {path: 'Home', component: HomeComponent, canActivate: [UserGuardGuard, TokenGuardGuard]},

  //PAGINA 404, NO ENCONTRADO
    {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
