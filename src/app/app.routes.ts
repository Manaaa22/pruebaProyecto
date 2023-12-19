import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';



export const routes: Routes = [
   {path:'', redirectTo:'login', pathMatch: 'full'},
   {path:'login', component: LoginComponent},
   {path:'usuario', component: UsuarioComponent}
    
   ];

