import { MatSnackBar} from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginData = {
    "username" : '',
    "password" : ''
  }
  
  constructor(private snack:MatSnackBar, private loginService:LoginService, private router:Router){ }

  ngOnInit(): void {
      
  }

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      Swal.fire('Advertencia','El nombre de usuario es requerido','warning');
      return;
    }
    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      Swal.fire('Advertencia','La contraseña es requerida','warning');
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) =>{
        console.log(data);

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          if(this.loginService.getUserRole() == "ADMIN"){
            //Dashboard Admin
            //window.location.href = '/admin';
            this.router.navigate(['admin']);
            this.loginService.loginStatusSubjec.next(true);
          }
          else if(this.loginService.getUserRole() == "INVITADO"){
            //User Dashboard
            //window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard']);
            this.loginService.loginStatusSubjec.next(true);
          }
          else{
            this.loginService.logout();
          }

        }) 
      },(error) => {
        console.log(error);
        Swal.fire('Error','Usuario o Contraseña incorrecto','error');
      }
    )
  }
}
