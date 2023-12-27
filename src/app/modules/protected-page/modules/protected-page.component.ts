import { Component } from '@angular/core';
//El modelo del usuario
import { User } from 'src/app/core/models/user.model';
//el servicio para recivir y enviar datos
import { AuthService } from 'src/app/core/services/auth.service';
//para filtrar datos
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-protected-page',
  templateUrl: './protected-page.component.html',
  styleUrls: ['./protected-page.component.css']
})
export class ProtectedPageComponent {
  //para almacenar el usuario
  user:User|null=null;
  local:any;
  //constructor
  constructor(private Service: AuthService) {}

  ngOnInit(): void {
  //utilizo el servicio para llenar el usuario si no esta vacio
    this.Service.getUser()
    .pipe(filter((user)=> user !== null))
    .subscribe((user) => {
      this.user = user;
    });

    //si no esta vacio guardo los datos
    if (this.user!=null){localStorage.setItem("user",JSON.stringify(this.user));}
    //si esta vacio cargo los datos
    else {
      //necesito realizar este paso por que sino da error
      this.local = localStorage.getItem("user");
      //ahora si cargo el user
      this.user = JSON.parse(this.local);
    }

  }

}
