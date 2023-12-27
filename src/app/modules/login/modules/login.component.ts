import { Component } from '@angular/core';
//para el formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//para las conecciones con la API
import { ApiService } from 'src/app/core/services/api.service';
//el servicio para recivir y enviar datos
import { AuthService } from 'src/app/core/services/auth.service';
//para manejar las rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //el formulario
  formulario:FormGroup;
  //para ver el retorno de la API
  ReturnAPI: any;
  //para saber cuando mostrar el mensaje de 'Credenciales invalidas'
  b = false;
  //constructor
  constructor(private formBuilder:FormBuilder , private apiService: ApiService, private Service: AuthService, private router: Router){
    //solo valido que no esten vacios
    this.formulario = this.formBuilder.group({
      usu: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    });
  }

  onSubmit() {
    //en caso de que es formulario este completo
    if (this.formulario.valid) {
      //creo el json
      const json = {
        //los dos datos
        username: this.formulario.value.usu,
        password: this.formulario.value.pass
      };
      //mensaje POST - subscribe para ver los eventos
      this.apiService.postData(json).subscribe(
        //exito
        (response) => {
          //respuesta de la API
          this.ReturnAPI = response;
          //cargo el user para enviarlo
          this.Service.setUser(response);
          //lo envio a este ruta
          this.router.navigate(['/protected-page']);
        },
        //error
        () => {
          //para mostar el mensaje 'Credenciales invalidas'
          this.b = true;
        }
      );
    }
  }

}
