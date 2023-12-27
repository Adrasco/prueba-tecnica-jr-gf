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
  user:User|null=null;
  local:any;

  constructor(private Service: AuthService) {}

  ngOnInit(): void {

    this.Service.getUser()
    .pipe(filter((user)=> user !== null))
    .subscribe((user) => {
      this.user = user;
    });


    if (this.user!=null){localStorage.setItem("user",JSON.stringify(this.user));}
    else {
      this.local = localStorage.getItem("user");
      this.user = JSON.parse(this.local);
    }

  }

}
