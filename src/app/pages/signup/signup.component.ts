import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    email : ''
  }

  constructor(private userService:UserService, private snack:MatSnackBar) {}

  ngOnInit(): void {
      
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null || this.user.password == '' || this.user.password == null ){
      Swal.fire('Advertencia','Faltar completar campos','warning');
      return;
    }
    this.userService.registrarUsuario(this.user).subscribe(
      (data) =>{
        console.log(data);
        Swal.fire('Usuario guardado','Usuario registrado con exito','success');
      },(error) =>{
        console.log(error);
        Swal.fire('Error','Ha ocurrido un error en el sistema','error');
      }
    )
  }

}
