import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm : FormGroup;

  constructor(private _fb : FormBuilder) {
    this.registerForm = this._fb.group({
      nickname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)], []],
      firstname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)]],
      lastname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)]],
      birthdate : [null, []],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],
    })
  }

  createUser() {
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      console.log("Formulaire valide ❤");
    }

    else{
      this.registerForm.markAllAsTouched();
      console.log("Formulaire invalide 😢")
    }
  }
}
