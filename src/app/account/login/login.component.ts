import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwaggerApiService } from 'src/app/shared/services/swagger-api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  router = inject(Router)
  loginForm : FormGroup;

  constructor(private _fb : FormBuilder, private _swaggerService : SwaggerApiService, private _authService : AuthService) {
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
          this._authService.getToken(rep.token)
          this._authService.setUser(rep.member.pseudo)
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
