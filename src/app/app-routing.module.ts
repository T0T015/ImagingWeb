import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { RecientesComponent } from './pages/admin/recientes/recientes.component';
import { ExploradorComponent } from './pages/admin/explorador/explorador.component';
import { MantenimientosComponent } from './pages/admin/mantenimientos/mantenimientos.component';
import { SeguridadComponent } from './pages/admin/seguridad/seguridad.component';
import { PlantillasComponent } from './pages/admin/plantillas/plantillas.component';
import { SeguimientoComponent } from './pages/admin/seguimiento/seguimiento.component';

const routes: Routes = [
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : '',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'admin',
    component : DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:RecientesComponent
      },
      {
        path:'explorador',
        component:ExploradorComponent
      },
      {
        path:'mantenimiento',
        component:MantenimientosComponent
      },
      {
        path:'seguridad',
        component:SeguridadComponent
      },
      {
        path:'plantillas',
        component:PlantillasComponent
      },
      {
        path:'seguimiento',
        component:SeguimientoComponent
      },
    ]
  },
  {
    path : 'user-dashboard',
    component : UserDashboardComponent,
    pathMatch : 'full',
    canActivate:[NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
