import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario:FormGroup;
  b = false;

  constructor(private formBuilder:FormBuilder , private apiService: ApiService, private Service: AuthService, private router: Router){

    this.formulario = this.formBuilder.group({
      usu: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const json = {
        username: this.formulario.value.usu,
        password: this.formulario.value.pass
      };
      this.apiService.postData(json).subscribe(
        (response) => {
          this.Service.setUser(response);
          this.router.navigate(['/protected-page']);
        },
        () => {
          this.b = true;
        }
      );
    }
  }

}
