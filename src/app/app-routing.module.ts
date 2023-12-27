import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//guards
import { authGuard } from './core/guards/auth.guard';
//componentes
import { LoginComponent } from './modules/login/modules/login.component';
import { ProtectedPageComponent } from './modules/protected-page/modules/protected-page.component';
import { NotFountComponent } from './not-fount/not-fount.component';

const routes: Routes = [

  { path:'login', component:LoginComponent},
  { path:'protected-page', component:ProtectedPageComponent,
  canMatch: [authGuard]},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component:NotFountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
