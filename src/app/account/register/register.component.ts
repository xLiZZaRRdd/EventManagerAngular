import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SwaggerApiService } from 'src/app/shared/services/swagger-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  router = inject(Router)
  registerForm : FormGroup;

  constructor(private _fb : FormBuilder, private _httpClient : HttpClient, private _swaggerService : SwaggerApiService) {
    this.registerForm = this._fb.group({
      pseudo : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)], []],
      firstName : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)]],
      lastName : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)]],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{5,}$/)
    ]]
    })

  }

  createUser() {
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      console.log("Formulaire valide ❤");

      this._swaggerService.register(this.registerForm.value).subscribe({
        next : (rep) => {
          console.log("Tout est top", rep)
          this.router.navigateByUrl("/account/login")
        },

        error : (err) => {
          console.log("Problème", err)
        }
      })
    }

    else{
      this.registerForm.markAllAsTouched();
      console.log("Formulaire invalide 😢")
    }
  }
}
