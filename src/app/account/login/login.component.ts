import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwaggerApiService } from 'src/app/shared/services/swagger-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm : FormGroup;
  router = inject(Router)

  constructor(private _fb : FormBuilder, private _swaggerService : SwaggerApiService) {
    this.loginForm = this._fb.group({
      identifier : [null, [Validators.required]],
      password : [null, [Validators.required]]
    })
  }

  login() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);

      this._swaggerService.login(this.loginForm.value).subscribe({
        next : (rep) => {
          console.log("Tout est top pour le login", rep)
          //token et idUser à mettre dans le localstorage
          localStorage.setItem('myToken', rep.token)
          localStorage.setItem('userId', rep.member.id.toString())
          this.router.navigateByUrl("/")
        },

        error : (err) => {
          console.log("Problème au login", err)
        }
    })
    }

    else{
      this.loginForm.markAllAsTouched();
      console.log("Login invalide 😢")
    }
  }
}
