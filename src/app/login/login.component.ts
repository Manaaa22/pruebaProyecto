import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-login',
 /*standalone: true,
  imports: [],*/
  templateUrl: './login.component.html',
  /* providers: [ UsuarioService ],*/
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void { }

  onLogin(){
    console.log(this.loginForm.value)
  }

}




