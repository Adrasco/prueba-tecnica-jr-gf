import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './modules/login.component';
//la API
import { ApiService } from 'src/app/core/services/api.service';
//Para interactuar con las APIs
import { HttpClientModule } from '@angular/common/http';
//para que funcione los formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //proveedor de servicio
  providers:[ApiService]
})
export class LoginModule { }
